import React from 'react'
import './resume.css'
import ResumeCreate from '../../components/forms/resume-create'

class ResumeFirst extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="jh-resume-first-container">
        <div className="jh-resume-first-flex">
          <h1 className="jh-resume-first-heading">
            YOU ARE ABOUT TO CREATE YOUR FIRST JOBHERO RESUME!
          </h1>
          <p className="jh-resume-first-subtitle">
            Enter a name for your first resume to get started. Use the name of the job position you want is a good start.
          </p>
          <ResumeCreate/>
        </div>

      </div>
    );
  }
}

export default ResumeFirst
