import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditBasics extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume,
      basics:props.resume.basics
    }
  }

  handleInputChange(event){
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState(prevState => ({
        basics: {
            ...prevState.basics,
            [name]: value
        }
    }), () => {
      console.log(this.state.basics)
    })
  }

  handleSaveResumeChange(event){
    event.preventDefault()
    let basics = this.state.basics
    let resume = this.state.resume
    resume.basics = basics
    console.log('save resume!',resume)
    this.props.onResumeUpdated(resume)
  }



  render() {
    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          BASIC INFO
        </h1>
        <form className="jh-edit-form" onSubmit={this.handleSaveResumeChange.bind(this)}>
          <p className="jh-edit-form-details">
            This will be at the top of your resume.
          </p>
          <label>
            <h2>Full Name</h2>
            <div className="jh-input-container">
              <input required type="text" placeholder="John Doe" name="name" value={this.state.basics.name} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter your name.
            </p>
          </label>
          <label>
            <h2>Job Title</h2>
            <div className="jh-input-container">
              <input required type="text" placeholder="Body Double" name="label" value={this.state.basics.label} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter position you are applying for.
            </p>
          </label>
          <label>
            <h2>Email</h2>
            <div className="jh-input-container">
              <input required type="email" placeholder="jdoe@example.com" name="email" value={this.state.basics.email} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter your email. Use a simple and professional email.
            </p>
          </label>
          <label>
            <h2>Phone</h2>
            <div className="jh-input-container">
              <input type="text" placeholder="123-123-1234" name="phone" value={this.state.basics.phone} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter your phone number only if you want the prospective employer to call you.
            </p>
          </label>
          <div className="jh-form-button-container">
            <button type="submit">
              <ButtonText text="SAVE BASIC INFO" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeEditBasics
