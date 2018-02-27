import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditInterests extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      interests:props.resume.interests || [],
    }
  }

  handleInputChange(index,event){
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let interests = this.state.interests;
    interests[index] = {
      [name]: value
    };

    this.setState(prevState => ({
        interests
    }), () => {
      console.log(this.state.interests)
    })
  }

  handleSaveResumeChange(event){
    event.preventDefault()
    let interests = this.state.interests
    let resume = this.state.resume
    resume.interests = interests
    console.log('save resume!')
    this.props.onResumeUpdated(resume)
  }



  render() {
    let listOfInterestItems;
    listOfInterestItems = this.state.interests.map((item,index) => {
      console.log(item)
        return (
          <label key={index}>
            <h2>{this.state.section}</h2>
            <div className="jh-input-container">
              <input required type="text" placeholder="Collecting stamps" name="name" value={item.name} onChange={this.handleInputChange.bind(this,index)}/>
            </div>
            <p className="jh-input-helper-text">
              Enter something you have a lot of knowledge with.
            </p>
          </label>
        )
    })

    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          {this.state.section}
        </h1>
        <form className="jh-edit-form"  onSubmit={this.handleSaveResumeChange.bind(this)}>
          <p className="jh-edit-form-details">
            This is where we will list out the most relevent knowledge you have for the position you are applying for.
          </p>
          {listOfInterestItems}
          <div className="jh-form-button-container">
            <button type="submit">
              <ButtonText text={"SAVE " + this.state.section} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeEditInterests
