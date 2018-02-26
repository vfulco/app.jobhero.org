import React from 'react'
import { withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import ResumeEditBasics from '../../components/forms/resume-edit-basics'
import ResumeEditKnowledge from '../../components/forms/resume-edit-knowledge'
import ResumeEditExperience from '../../components/forms/resume-edit-experience'
import ResumeEditSkills from '../../components/forms/resume-edit-skills'
import ResumeEditInterests from '../../components/forms/resume-edit-interests'

class ResumeEdit extends React.Component {
  constructor(props){
    super(props)
    let stateResume
    if (props.location.state && props.location.state.resume){
      stateResume = props.location.state.resume
    } else{
      stateResume = {}
    }
    if(!props.location.state || !props.location.state.resume){
      this.props.history.push('/resume/' + props.match.params.id)
    }
    this.state = {
      section:props.match.params.section,
      id:props.match.params.id,
      resume:stateResume|| {}
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
          <ResumeEditBasics resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)} section={this.state.section} />
        }
        {this.state.section === 'knowledge' &&
          <ResumeEditKnowledge resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section}/>
        }
        {this.state.section === 'experience' &&
          <ResumeEditExperience resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section}/>
        }
        {this.state.section === 'skills' &&
          <ResumeEditSkills resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section}/>
        }
        {this.state.section === 'interests' &&
          <ResumeEditInterests resume={this.state.resume} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section}/>
        }
      </div>
    );
  }
}

export default withRouter(ResumeEdit)
