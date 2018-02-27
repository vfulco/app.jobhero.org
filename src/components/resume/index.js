import React from 'react'
import './resume.css'
import ResumeTemplate1 from './templates/t1'
import ButtonText from '../buttons/button-text'

class Resume extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {},
      shared:props.shared,
      name:props.name,
      id:props.id
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      resume:props.resume,
      shared:props.shared,
      name:props.name,
      id:props.id
    })
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <div className="jh-resume-menu jh-noprint">
          <div className="jh-resume-menu-flex">
            <div>
              <ButtonText text="SHARED LINK"/>
            </div>
            <div>
              <ButtonText text="SHARED LINK"/>
            </div>
          </div>
        </div>
        <ResumeTemplate1 id={this.state.id} resume={this.state.resume} shared={this.state.shared}/>
      </div>
    );
  }
}

export default Resume
