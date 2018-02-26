import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'
import Header from '../../components/header'

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
    this.getResumes();
  }
  render() {
    let allUserResumes;
    if (this.state.resumes[0]){
      allUserResumes = this.state.resumes.map((resume,index) => {
        return <Link key={index} to={"/resume/" + resume.resume_id}>{resume.resume_name}</Link>
      })
    }
    return (
      <div>
        <Header printButton={false}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>List all resumes</h1>
        {allUserResumes}
      </div>
    );
  }
}

export default ResumeList
