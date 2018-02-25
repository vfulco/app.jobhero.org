import React from 'react'
import './t1.css'
import Block from './block.js'

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
          <section className="jh-t1-skills-section">
            <div className="jh-t1-skills-flex">
              <Block title="knowledge" list={this.state.resume.skills}/>
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
          hello
        </div>
      </div>

    );
  }
}

export default ResumeTemplate1
