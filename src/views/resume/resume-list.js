import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import Header from '../../components/header'
import './resume.css'
import ButtonText from '../../components/buttons/button-text'

class ResumeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resumes:[]
    }
  }
  getResumes(){
    ResumeApi.getAllResumes()
    .then((allResumes) => {
      this.setState({resumes:allResumes.data.data})
    })
  }

  createNewResume(){
    let newResumeBody = {
      name:'my new resume'
    }
    ResumeApi.createResume(newResumeBody)
    .then((createdResume) => {
      console.log(createdResume.data.data)
      this.props.history.push('/resume/' + createdResume.data.data.resume[0].id)
    })
  }

  componentDidMount(){
    this.getResumes()
    window.scrollTo(0, 0)
  }
  render() {
    let allUserResumes;
    if (this.state.resumes[0]){
      allUserResumes = this.state.resumes.map((resume,index) => {
        return (
          <Link key={index} to={"/resume/" + resume.resume_id}>
            <div className="jh-resume-list-item">
              {resume.resume_name}
              </div>
            </Link>
          )
      })
    }
    return (
      <div className="jh-resume-list-container">
        <Header printButton={false}/>
        <div className="jh-resume-list">
          <h1 className="jh-resume-list-heading">
            MY RESUMES
          </h1>
          {allUserResumes}
          <div className="jh-create-resume-button-container" onClick={this.createNewResume.bind(this)}>
            <ButtonText text="new resume"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeList
