import React from 'react'
import { Link } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import Header from '../../components/header'
import './resume.css'
import moment from 'moment'
import ResumeCreate from '../../components/forms/resume-create'

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

  componentDidMount(){
    this.getResumes()
    window.scrollTo(0, 0)
  }
  render() {
    let allUserResumes;
    if (this.state.resumes[0]){
      allUserResumes = this.state.resumes.sort((a,b)=>{return b.resume_updated_at.localeCompare(a.resume_updated_at)}).map((resume,index) => {
        return (
          <Link key={index} to={"/resume/" + resume.resume_id}>
            <div className="jh-resume-list-item">
              <h2>{resume.resume_name}</h2>
              <p>
                Updated {moment(resume.resume_updated_at).format("MMM Do YYYY")}
              </p>
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
          <div className="jh-create-resume-form-container">
            <ResumeCreate/>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeList
