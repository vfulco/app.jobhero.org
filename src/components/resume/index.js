import React from 'react'
import './resume.css'
import ResumeTemplate1 from './templates/t1'

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
        <ResumeTemplate1 resume={this.state.resume}/>
    );
  }
}

export default Resume
