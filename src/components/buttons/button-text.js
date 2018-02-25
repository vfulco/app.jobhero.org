import React from 'react'
import './buttons.css'

class ButtonText extends React.Component {

  render() {
    return (
      <div className="jh-button-container">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default ButtonText
