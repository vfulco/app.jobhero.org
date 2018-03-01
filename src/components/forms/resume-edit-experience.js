import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditExperience extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      skills:props.resume.skills || [],
      firstRun:props.firstRun,
      loading:false
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  componentWillReceiveProps(props){
    this.setState({loading:props.loading})
  }
  handleInputChange(index,event){
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let skills = this.state.skills;
    skills[index] = {
      [name]: value,
      level:this.state.section
    };

    this.setState(prevState => ({
        skills
    }), () => {
      console.log(this.state.skills)
    })
  }

  handleSaveResumeChange(event){
    event.preventDefault()
    let skills = this.state.skills
    let resume = this.state.resume
    resume.skills = skills
    console.log('save resume!')
    this.props.onResumeUpdated(resume)
  }

  render() {
    let listOfKnowledgeItems;
    listOfKnowledgeItems = this.state.skills.map((skill,index) => {
      console.log(skill)
      if (skill.level === this.state.section){
        return (
          <label className="jh-form-label" key={index}>
            <h2>
              {this.state.section}
            </h2>
            <p className="jh-input-helper-text">
              Enter something you have a lot of experience with. Such as "10+ Years project management."
            </p>
            <div className="jh-input-container">
              <input required type="text" placeholder="5+ years customer service" name="name" value={skill.name} onChange={this.handleInputChange.bind(this,index)}/>
            </div>
          </label>
        )
      }
      return ''
    })

    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          {this.state.section}
        </h1>
        <form className="jh-edit-form" onSubmit={this.handleSaveResumeChange.bind(this)}>
          <p className="jh-edit-form-details">
            This is where we will list out the most relevent experience you have for the position you are applying for. Top 5 experience items.
          </p>
          <div className="jh-form-group">
            {listOfKnowledgeItems}
          </div>
          <div className="jh-form-button-container">
            {this.state.firstRun === true &&
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE AND CONTINUE" />
              </button>
            }
            {this.state.firstRun === false &&
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE EXPERIENCES" />
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeEditExperience
