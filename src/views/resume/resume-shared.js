import React from 'react'
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
      this.setState({
        loading:false,
        errorMessage:error.message
      })
    })
  }

  componentDidMount(){
    this.getSharedResumeFromApi()
  }

  render() {
    return (
      <div>
        <Header/>
        <Resume resume={this.state.resume}/>
      </div>
    );
  }
}

export default ResumeShared
