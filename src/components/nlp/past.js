import React from 'react'
import './nlp.css'
import compromise from 'compromise'

function capitalize(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}
class NaturalPast extends React.Component {
  constructor(props){
    super(props)
    let nlpText = compromise(props.text)
    let sentence = nlpText.sentences(0)
    this.state = {
      text:props.text,
      nlp:capitalize(sentence.toPastTense().out('text'))
    }
  }
  componentWillReceiveProps(props){
    let nlpText = compromise(props.text)
    let sentence = nlpText.sentences(0)
    this.setState({
      text:props.text,
      nlp:capitalize(sentence.toPastTense().out('text'))
    })
  }
  render() {
    return (
      <div className="jh-nlp-container">
        {this.state.text !== this.state.nlp &&
          <div>
            <h2>
              Recommendation:
            </h2>
            <p>
              "{this.state.nlp}"
            </p>
          </div>
        }
      </div>
    );
  }
}

export default NaturalPast
