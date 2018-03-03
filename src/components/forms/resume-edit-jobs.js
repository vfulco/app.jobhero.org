import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'
import NaturalPast from '../nlp/past'

class ResumeEditJobs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.section,
      resume:props.resume,
      work:props.resume.work || [],
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
    let work = this.state.work;
    work[index][name] = value
    this.setState(prevState => ({
        work,
        buttonDisabled:false
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
      function updateHighlights(highlight,event){
        console.log(highlight)
        job.highlights[highlight] = event.target.value
        let work = this.state.work
        work[index] = job
        this.setState({
          work,
          buttonDisabled:false
        })
      }
      console.log(job)
      let jobHighlights;
      if(job.highlights){
        jobHighlights = job.highlights.map((highlight,highlightIndex) => {
          return (
            <label className="jh-form-label" key={highlightIndex}>
              <h2>accomplishment at {job.company}</h2>
              <p className="jh-input-helper-text">
                Enter an impressive highlight or accomplishment from your job. such as "Created new sales process" or "Earned top employee 3 months in a row"
              </p>
              <div className="jh-input-container">
                <input type="text" name="highlights" value={highlight} onChange={updateHighlights.bind(this,highlightIndex)}/>
              </div>
              <NaturalPast text={highlight}/>
            </label>
          )
        })
      } else {
        let work = this.state.work
        let newHighlights = ['hello world','this is a new highlight']
        work[index].highlights = newHighlights
        this.setState({work})
      }
        return (
          <div className="jh-form-group" key={index}>
            <div className="jh-sticky-form-subsection">
              {job.company}
            </div>
            <label className="jh-form-label">
              <h2>company</h2>
              <p className="jh-input-helper-text">
                Enter the name of the company you worked for.
              </p>
              <div className="jh-input-container">
                <input required type="text" placeholder="Crabby Patties" name="company" value={job.company} onChange={this.handleInputChange.bind(this,index)}/>
              </div>
            </label>
            <label className="jh-form-label">
              <h2>position</h2>
              <p className="jh-input-helper-text">
                Enter the role you filled at {job.company}. Which is sometimes different from the position you held.
              </p>
              <div className="jh-input-container">
                <input required type="text" placeholder="General Manager" name="position" value={job.position} onChange={this.handleInputChange.bind(this,index)}/>
              </div>
            </label>
            <label className="jh-form-label">
              <h2>start date</h2>
              <p className="jh-input-helper-text">
                Enter date you started working at {job.company}.
              </p>
              <div className="jh-input-container">
                <input required type="date" name="startDate" value={job.startDate} onChange={this.handleInputChange.bind(this,index)} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="date format (YYYY-MM-DD)"/>
              </div>
            </label>
            <label className="jh-form-label">
              <h2>end date</h2>
              <p className="jh-input-helper-text">
                Enter date you stopped working at {job.company}. If you still work at this company then don't fill in the date.
              </p>
              <div className="jh-input-container">
                <input type="date" name="endDate" value={job.endDate} onChange={this.handleInputChange.bind(this,index)} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" title="date format (YYYY-MM-DD)"/>
              </div>
            </label>
            {jobHighlights}
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
            This is where we will list out the top 3 jobs most relevent to the position you are applying for. If you do not have work experience then use volunteer or freelance experience. This is not meant to be a complete list of all the jobs you've ever had.
          </p>
          {listOfJobItems}
          <div className="jh-form-button-container">
            {this.state.firstRun === true &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE AND CONTINUE" />
              </button>
            }
            {this.state.firstRun === false &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE SELECT HISTORY" />
              </button>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default ResumeEditJobs
