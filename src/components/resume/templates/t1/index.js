import React from 'react'
import './t1.css'
import T1Block from './block.js'
import T1Heading from './heading.js'
import { withRouter } from 'react-router-dom'

class ResumeTemplate1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {},
      id:props.id,
      shared:props.shared
    }
  }

  componentDidMount(){
  }

  componentWillReceiveProps(props){
    this.setState({
      resume:props.resume,
      shared:props.shared,
      id:props.id
    })
  }

  handleEditSection(section,event){
    if(this.state.shared !== true) {
      this.props.history.push({pathname:`/resume/${this.state.id}/edit/${section}`,state:{resume:this.state.resume}})
    }
  }

  render() {

    let jobsList;
    if (this.state.resume && this.state.resume.work) {
      jobsList = this.state.resume.work.map((job,index) => {
        return <T1Block key={index} title={job.position} company={job.company} startDate={job.startDate} endDate={job.endDate} type="job" list={job.highlights}/>
      })
    }

    return (
      <div className="jh-resume-container jh-t1-container">
        <div className="jh-resume-page">
          <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'basics')} title="Click to edit basic info">
            <section className="jh-t1-basics-section">
              {this.state.resume && this.state.resume.basics &&
                <h1>
                  {this.state.resume.basics.name}
                </h1>
              }
              {this.state.resume && this.state.resume.basics &&
                <h2>
                  {this.state.resume.basics.label}
                </h2>
              }
              {this.state.resume && this.state.resume.basics &&
                <h3>
                    {this.state.resume.basics.email} {this.state.resume.basics.phone}
                </h3>
              }
            </section>
          </div>
          <T1Heading title="QUALIFICATIONS"/>
          <section className="jh-t1-skills-section">
            <div className="jh-t1-skills-flex">
              <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'knowledge')}>
                <T1Block title="knowledge" type="skills" list={this.state.resume.skills}/>
              </div>
              <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'experience')}>
                <T1Block title="experience"  list={this.state.resume.skills}/>
              </div>
            </div>
            <div className="jh-t1-skills-flex">
              <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'skills')}>
                <T1Block title="skills" list={this.state.resume.skills}/>
              </div>
            </div>
            <div className="jh-t1-skills-flex">
              <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'interests')}>
                <T1Block title="interests" type="interests" list={this.state.resume.interests}/>
              </div>
            </div>
            <div className="jh-t1-skills-flex">
              <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'education')}>
                <T1Block title="education" type="education" list={this.state.resume.education}/>
              </div>
            </div>
          </section>
        </div>
        <div className="page-break"></div>
        <div className="jh-resume-page">
          <section className="jh-t1-basics-section">
            {this.state.resume && this.state.resume.basics &&
              <h4>
                  {this.state.resume.basics.name} &bull; {this.state.resume.basics.email}
              </h4>
            }
          </section>
          <T1Heading title="SELECT HISTORY"/>
          <section className="jh-t1-skills-section">
            <div className={"jh-t1-edit-section" + this.state.shared} onClick={this.handleEditSection.bind(this,'jobs')}>
              {jobsList}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ResumeTemplate1)
