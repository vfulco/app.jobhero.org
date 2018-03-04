import React from 'react'
import { withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import ResumeEditBasics from '../../components/forms/resume-edit-basics'
import ResumeEditKnowledge from '../../components/forms/resume-edit-knowledge'
import ResumeEditExperience from '../../components/forms/resume-edit-experience'
import ResumeEditSkills from '../../components/forms/resume-edit-skills'
import ResumeEditInterests from '../../components/forms/resume-edit-interests'
import ResumeEditJobs from '../../components/forms/resume-edit-jobs'

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
      resume:stateResume|| {},
      firstRun:props.location.state.firstRun || false,
      loading:false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  goNext(updatedResume){
    if(this.state.firstRun === true && this.state.section === 'basics'){
      this.setState({section:'knowledge'})
    } else if(this.state.firstRun === true && this.state.section === 'knowledge'){
      this.setState({section:'experience'})
    } else if(this.state.firstRun === true && this.state.section === 'experience'){
      this.setState({section:'skills'})
    } else if(this.state.firstRun === true && this.state.section === 'skills'){
      this.setState({section:'interests'})
    } else if(this.state.firstRun === true && this.state.section === 'interests'){
      this.setState({section:'jobs'})
    } else {
      this.props.history.push('/resume/' + this.state.id)
    }
  }
  updateResume(resume){
    this.setState({loading:true})
    ResumeApi.updateSingleResume(resume)
    .then((updatedResume) => {
      this.setState({loading:false})
      this.goNext(updatedResume.data.data)
      console.log(updatedResume.data.data)
    })
  }

  goBack(){
    this.props.history.push('/resume/' + this.state.id)
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
          <div className="jh-edit-form-close" onClick={this.goBack.bind(this)}>&times;</div>
        {this.state.section === 'basics' &&
          <ResumeEditBasics resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)} section={this.state.section} loading={this.state.loading}/>
        }
        {this.state.section === 'knowledge' &&
          <ResumeEditKnowledge resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section} loading={this.state.loading}/>
        }
        {this.state.section === 'experience' &&
          <ResumeEditExperience resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section} loading={this.state.loading}/>
        }
        {this.state.section === 'skills' &&
          <ResumeEditSkills resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section} loading={this.state.loading}/>
        }
        {this.state.section === 'interests' &&
          <ResumeEditInterests resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section} loading={this.state.loading}/>
        }
        {this.state.section === 'jobs' &&
          <ResumeEditJobs resume={this.state.resume} firstRun={this.state.firstRun} onResumeUpdated={this.handleResumeUpdate.bind(this)}  section={this.state.section} loading={this.state.loading}/>
        }
      </div>
    );
  }
}

export default withRouter(ResumeEdit)
