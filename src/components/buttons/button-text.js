import React from 'react'
import './buttons.css'

class ButtonText extends React.Component {

  render() {
    let colors;
    if (this.props.type === 'success'){
      colors = {
        backgroundColor:'#7DDF64',
        color:'#333'
      };
    } else if(this.props.type === 'danger'){
      colors = {
        backgroundColor:'#AC3931',
        color:'#eee'
      }
    } else {
      colors = {
        backgroundColor:'#aaa',
        color:'#fff'
      }
    }

    return (
      <div className="jh-button-container" style={colors}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default ButtonText
