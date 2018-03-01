import React from 'react'
import './buttons.css'
import LoadingAnimation from '../loading-animation'

class ButtonText extends React.Component {

  render() {
    let colors;
    if (this.props.type === 'success'){
      colors = {
        backgroundColor:'#7DDF64',
        border:'2px solid #7DDF64',
        color:'#333'
      };
    } else if(this.props.type === 'danger'){
      colors = {
        backgroundColor:'#AC3931',
        border:'2px solid #AC3931',
        color:'#eee'
      }
    } else {
      colors = {
        backgroundColor:'none',
        border:'2px solid #aaa',
        color:'#aaa'
      }
    }

    return (
      <div className="jh-button-container" style={colors}>
        {this.props.loading === true &&
          <LoadingAnimation/>
        }
        {!this.props.loading === true &&
          <h1>{this.props.text}</h1>
        }
      </div>
    );
  }
}

export default ButtonText
