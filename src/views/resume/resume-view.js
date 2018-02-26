import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Resume from '../../components/resume'
import Header from '../../components/header'
import ResumeApi from '../../api/resume'

class ResumeView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:{},
      resume_id:props.match.params.id
    }
  }

  getResumeFromApi(){
    ResumeApi.getResume(this.state.resume_id)
    .then((ownedResume)=> {
      this.setState({
        loading:false,
        resume: ownedResume.data.data.json_resume
      })
    })
    .catch((error)=>{
      console.log(error)
      this.props.history.push('/login')
    })
  }

  componentDidMount(){
    this.getResumeFromApi()
  }

  render() {
    return (
      <div>
        <Header printButton={true} backButton={true} />
        <Resume id={this.state.resume_id} resume={this.state.resume}  shared=""/>
      </div>
    );
  }
}

export default withRouter(ResumeView)
