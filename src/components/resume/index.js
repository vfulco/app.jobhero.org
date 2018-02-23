import React from 'react'
import './resume.css'

class Resume extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {}
    }
  }

  componentWillReceiveProps(props){
    this.setState({resume:props.resume})
  }

  render() {
    return (
      <div className="jh-resume-container">
        <div className="jh-resume-page">
          {JSON.stringify(this.state.resume)}
        </div>
      </div>
    );
  }
}

export default Resume
