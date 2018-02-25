import React from 'react'
import './button.css'

class Button extends React.Component {

  render() {
    return (
      <div className="jh-button-container">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Button
