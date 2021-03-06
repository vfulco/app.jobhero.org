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
    let interests = this.state.interests;
    interests[index] = {
      [name]: value
    };

    this.setState(prevState => ({
        interests,
        buttonDisabled:false
    }), () => {
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
        return (
          <label className="jh-form-label" key={index}>
            <h2>
              INTERESTING FACT
            </h2>
            <p className="jh-input-helper-text">
              Enter something interesting about you.
            </p>
            <div className="jh-input-container">
              <input required type="text" placeholder="Climbing mountians in every continent" name="name" value={item.name} onChange={this.handleInputChange.bind(this,index)}/>
            </div>
          </label>
        )
    })

    return (
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          ITEMS OF INTEREST
        </h1>
        <form className="jh-edit-form"  onSubmit={this.handleSaveResumeChange.bind(this)}>
          <p className="jh-edit-form-details">
            This is where you should list out anything that shows you are interesting and worth interviewing. Add education, awards, hobbies, etc. Only 5 items so use the most interesting for the position you are applying for.
          </p>
          <div className="jh-form-group">
            {listOfInterestItems}
          </div>
          <div className="jh-form-button-container">
            {this.state.firstRun === true &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE AND CONTINUE" />
              </button>
            }
            {this.state.firstRun === false &&
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="SAVE ITEMS OF INTEREST INFO" />
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeEditInterests
