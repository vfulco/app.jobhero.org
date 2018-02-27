import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'

class ResumeEditJobs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      work:props.resume.work || [],
    }
  }

  handleInputChange(index,event){
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let work = this.state.work;
    work[index][name] = value
    this.setState(prevState => ({
        work
    }), () => {
      console.log(this.state.work)
    })
  }

  handleSaveResumeChange(event){
    event.preventDefault()
    let work = this.state.work
    let resume = this.state.resume
    resume.work = work
    console.log('save resume!')
    this.props.onResumeUpdated(resume)
  }



  render() {
    let listOfJobItems;
    listOfJobItems = this.state.work.map((job,index) => {
      console.log(job)
        return (
          <div className="jh-form-group" key={index}>
            <div className="jh-sticky-form-subsection">
              {job.company}
            </div>
            <label>
              <h2>company</h2>
              <p className="jh-input-helper-text">
                Enter the name of the company you worked for.
              </p>
              <div className="jh-input-container">
                <input required type="text" placeholder="Crabby Patties" name="company" value={job.company} onChange={this.handleInputChange.bind(this,index)}/>
              </div>
            </label>
            <label>
              <h2>position</h2>
              <p className="jh-input-helper-text">
                Enter the position you held or the role you filled.
              </p>
              <div className="jh-input-container">
                <input required type="text" placeholder="General Manager" name="position" value={job.position} onChange={this.handleInputChange.bind(this,index)}/>
              </div>
            </label>
          </div>
        )
    })

    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          SELECT HISTORY
        </h1>
        <form className="jh-edit-form" onSubmit={this.handleSaveResumeChange.bind(this)}>
          <p className="jh-edit-form-details">
            This is where we will list out the top 3 jobs most relevent to the position you are applying for. If you do not have work experience then use volunteer experience or freelance experience.
          </p>
          {listOfJobItems}
          <div className="jh-form-button-container">
            <button type="submit">
              <ButtonText text={"SAVE " + this.state.section} />
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ResumeEditJobs
