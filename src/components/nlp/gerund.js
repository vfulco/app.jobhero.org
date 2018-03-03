import React from 'react'
import './nlp.css'
import compromise from 'compromise'

function capitalize(text){
  return text.charAt(0).toLowerCase() + text.slice(1);
}
function firstWord(text){
  return text.replace(/ .*/,'')
}
class NaturalGerund extends React.Component {
  constructor(props){
    super(props)
    let nlpText = compromise(firstWord(props.text))
    let sentence = nlpText.sentences(0)
    this.state = {
      text:props.text,
      firstWord:capitalize(firstWord(props.text)),
      gerund:sentence.has('#Gerund'),
      nlp:sentence.verbs().conjugate()[0]
    }
  }
  componentWillReceiveProps(props){
    let nlpText = compromise(firstWord(props.text))
    let sentence = nlpText.sentences(0)
    this.setState({
      text:props.text,
      firstWord:capitalize(firstWord(props.text)),
      gerund:sentence.has('#Gerund'),
      nlp:sentence.verbs().conjugate()[0]
    })
  }
  render() {
    return (
      <div className="jh-nlp-container">
        {this.state.nlp && this.state.nlp.Gerund && this.state.nlp.Gerund !== this.state.firstWord &&
          <div>
            <h2>
              Recommendation:
            </h2>
            <p>
              Start with {JSON.stringify(this.state.nlp.Gerund)} instead of {this.state.firstWord}
            </p>
          </div>
        }
        {this.state.gerund === false && this.state.text.length > 0 &&
          <div>
            <h2>
              Recommendation:
            </h2>
            <p>
              Start with a <a style={{textDecoration:'underline'}} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Gerund">gerund verb</a>
            </p>
          </div>
        }
      </div>
    );
  }
}

export default NaturalGerund
