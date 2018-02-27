import React from 'react'
import './forms.css'
import ButtonText from '../buttons/button-text'
import { NavLink, withRouter,Redirect } from 'react-router-dom'
import ResumeApi from '../../api/resume'

class ResumeCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resume_name: ''
    };
  };

   createResumeToApi(newResumeBody){
     this.setState({loading:true})
     ResumeApi.createResume(newResumeBody)
     .then((createdResume) => {
       console.log(createdResume.data.data)
       this.props.history.push('/resume/' + createdResume.data.data.resume[0].id)
     })
   }

   handleInputChange(event){
     let target = event.target;
     let value = target.type === 'checkbox' ? target.checked : target.value;
     let name = target.name;
     this.setState({
         [name]: value,
       }, () => {
       console.log(this.state)
     });
   }

   handleSubmit(event){
     event.preventDefault()
     console.log('SUBMITTED')
     let resume = {
       name:this.state.resume_name
     }
     console.log(resume)
     this.createResumeToApi(resume)
   }

  render(){

    return (
      <div>
        <form className="jh-edit-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <h1>NEW RESUME</h1>
            <div className="jh-input-container">
              <input required type="text" name="resume_name" placeholder="Name for new resume" onChange={this.handleInputChange.bind(this)}/>
            </div>
          </label>
          <div className="jh-form-button-container">
            <div>
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="CREATE NEW RESUME"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

};

export default withRouter(ResumeCreate)
