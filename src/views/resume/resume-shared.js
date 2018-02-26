import React from 'react'
import { withRouter } from 'react-router-dom'
import Resume from '../../components/resume'
import ResumeApi from '../../api/resume'
import Header from '../../components/header'
class ResumeShared extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:{},
      resume_share_id:props.match.params.share_id
    }
  }

  getSharedResumeFromApi(){
    ResumeApi.getSharedResume(this.state.resume_share_id)
    .then((sharedResume)=> {
      this.setState({
        loading:false,
        resume: sharedResume.data.data.json_resume
      })
    })
    .catch((error)=>{
      console.log(error)
      this.props.history.push('/login')
    })
  }

  componentDidMount(){
    this.getSharedResumeFromApi()
  }

  render() {
    return (
      <div>
        <Header printButton={true}/>
        <Resume resume={this.state.resume} shared="true"/>
      </div>
    );
  }
}

export default withRouter(ResumeShared)
