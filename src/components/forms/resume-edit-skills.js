import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditSkills extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      skills:props.resume.skills || [],
    }
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

  handleSaveResumeChange(){
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
          <label key={index}>
            <h2>{this.state.section}</h2>
            <div className="jh-input-container">
              <input type="text" placeholder="Microsoft Excel" name="name" value={skill.name} onChange={this.handleInputChange.bind(this,index)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter something you have a lot of knowledge with.
            </p>
          </label>
        )
      }


    })

    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          {this.state.section}
        </h1>
        <div className="jh-edit-form">
          <p className="jh-edit-form-details">
            This is where we will list out the most relevent knowledge you have for the position you are applying for.
          </p>
          {listOfKnowledgeItems}
          <div className="jh-form-button-container">
            <div onClick={this.handleSaveResumeChange.bind(this)}>
              <ButtonText text={"SAVE " + this.state.section} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeEditSkills
