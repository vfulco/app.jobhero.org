import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditKnowledge extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      skills:props.resume.skills || [],
      firstRun:props.firstRun,
      loading:false,
      buttonDisabled:true
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
        skills,
        buttonDisabled:false
    }), () => {
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
      if (skill.level === this.state.section){
        return (
          <label className="jh-form-label" key={index}>
            <h2>
              {this.state.section}
            </h2>
            <p className="jh-input-helper-text">
              Enter something you know well that is relevent to the role you are applying to
            </p>
            <div className="jh-input-container">
              <input required type="text" placeholder="Microsoft Excel" name="name" value={skill.name} onChange={this.handleInputChange.bind(this,index)}/>
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
            This is where we will list out the most relevent knowledge you have for the position you are applying for. List relevent things you know, not what you can do.
          </p>
          <div className="jh-form-group">
            {listOfKnowledgeItems}
          </div>
          <div className="jh-form-button-container">
            {this.state.firstRun === true &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE AND CONTINUE" />
              </button>
            }
            {this.state.firstRun === false &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE KNOWLEDGE" />
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeEditKnowledge
