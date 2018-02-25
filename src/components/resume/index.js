import React from 'react'
import './resume.css'
import ResumeTemplate1 from './templates/t1'

class Resume extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {},
      shared:props.shared
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      resume:props.resume,
      shared:props.shared
    })
  }

  render() {
    return (
      <div>
        <ResumeTemplate1 resume={this.state.resume} shared={this.state.shared}/>
      </div>
    );
  }
}

export default Resume
