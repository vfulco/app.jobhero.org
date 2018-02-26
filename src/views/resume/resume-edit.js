import React from 'react'
import { withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import ResumeEditBasics from '../../components/forms/resume-edit-basics'

class ResumeEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.match.params.section,
      id:props.match.params.id,
      resume:props.location.state.resume
    }
  }

  updateResume(resume){
    ResumeApi.updateSingleResume(resume)
    .then((updatedResume) => {
      console.log(updatedResume.data.data)
      this.props.history.push('/resume/' + this.state.id)
    })
  }

  handleResumeUpdate(resume){
    let resumeUpdateBody = {
      id:this.state.id,
      json_resume:resume
    }
    this.updateResume(resumeUpdateBody)
  }
  render() {
    return (
      <div>
        {this.state.section === 'basics' &&
          <ResumeEditBasics resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)} />
        }
      </div>
    );
  }
}

export default withRouter(ResumeEdit)
