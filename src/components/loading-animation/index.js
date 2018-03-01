import React from 'react'
import './loading-animation.css'


class LoadingAnimation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps(props){
  }

  render() {
    return (
      <div className="jh-loading-animation-container">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );
  }
}

export default LoadingAnimation
