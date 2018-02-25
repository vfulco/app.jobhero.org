import React from 'react'
import './t1.css'
import Block from './block.js'
import T1Heading from './heading.js'

class ResumeTemplate1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {}
    }
  }

  componentWillReceiveProps(props){
    this.setState({resume:props.resume})
  }

  render() {

    let jobsList;
    if (this.state.resume && this.state.resume.work) {
      console.log(this.state.resume.work)
      jobsList = this.state.resume.work.map((job,index) => {
        return <Block key={index} title={job.position} company={job.company} startDate={job.startDate} endDate={job.endDate} type="job" list={job.highlights}/>
      })
    }

    return (
      <div className="jh-resume-container jh-t1-container">
        <div className="jh-resume-page">
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
          <T1Heading title="QUALIFICATIONS"/>
          <section className="jh-t1-skills-section">
            <div className="jh-t1-skills-flex">
              <Block title="knowledge" type="skills" list={this.state.resume.skills}/>
              <Block title="experience"  list={this.state.resume.skills}/>
            </div>
            <div className="jh-t1-skills-flex">
              <Block title="skills" list={this.state.resume.skills}/>
            </div>
            <div className="jh-t1-skills-flex">
              <Block title="Items of Interest" list={this.state.resume.interests}/>
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
            {jobsList}
          </section>
        </div>
      </div>

    );
  }
}

export default ResumeTemplate1
