import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'
import { withRouter } from 'react-router-dom'
import ResumeApi from '../../api/resume'

class ResumeCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resume_name: '',
      buttonDisabled:true
    };
  };

   createResumeToApi(newResumeBody){
     this.setState({loading:true})
     ResumeApi.createResume(newResumeBody)
     .then((createdResume) => {
       this.props.history.push({pathname:`/resume/${createdResume.data.data.resume[0].id}/edit/basics`,state:{resume:createdResume.data.data.resume[0].json_resume,firstRun:true}})
     })
   }

   handleInputChange(event){
     let target = event.target;
     let value = target.type === 'checkbox' ? target.checked : target.value;
     let name = target.name;
     this.setState({
         [name]: value,
         buttonDisabled:false
       }, () => {
     });
   }

   handleSubmit(event){
     event.preventDefault()
     console.log('SUBMITTED')
     let resume = {
       name:this.state.resume_name
     }
     this.createResumeToApi(resume)
   }

  render(){

    return (
      <div>
        <form className="jh-create-resume-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <div className="jh-input-container">
              <input required type="text" name="resume_name" placeholder="Name for new resume" onChange={this.handleInputChange.bind(this)}/>
            </div>
          </label>
          <div className="jh-form-button-container">
            <div>
              <button disabled={this.state.buttonDisabled} type="submit">
                <ButtonText loading={this.state.loading} type="success" text="CREATE RESUME"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

};

export default withRouter(ResumeCreate)
