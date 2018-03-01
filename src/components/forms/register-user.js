import React from 'react'
import './forms.css'
import Authentication from '../../api/authentication.js'
import ButtonText from '../buttons/button-text'
import { NavLink, withRouter,Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

class RegisterUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  };

  componentDidMount(){
  };

  registerUser(email,password){
    this.setState({loading:true});
    Authentication.registerUser(email,password)
    .then((user)=> {
      this.props.history.push('/login')
    })
    .catch((error)=>{
      console.log(error)
      toast.error(error.response.data.statusMessage, {
            position: toast.POSITION.BOTTOM_CENTER
          });
      this.setState({
        loading:false,
        errorResponse:error.response
      })
    });
  };

  handleSignIn(e) {
    e.preventDefault()
    let email = this.refs.email.value
    let password = this.refs.password.value
    this.registerUser(email, password)
  };

  render(){
    if (this.state.redirectToReferrer) {
      return <Redirect to={this.state.from} />;
    }
    return (
      <div className="jh-enter-form-container">
        <form className="jh-enter-form" onSubmit={this.handleSignIn.bind(this)}>
          <h1 className="jh-enter-form-heading">
            REGISTER
          </h1>
          <p className="jh-edit-form-details">
            Create a new Job Hero account
          </p>
          <div className="jh-form-group">
            <label>
              <h1>EMAIL</h1>
              <div className="jh-input-container">
                <input required type="email" ref="email" placeholder="Enter email address" />
              </div>
            </label>
            <label>
              <h1>PASSWORD</h1>
              <div className="jh-input-container">
                <input required type="password" ref="password" placeholder="Enter password" />
              </div>
            </label>
          </div>

          <div className="jh-form-button-container">
            <div>
              <NavLink to='/login' activeClassName="">
                <ButtonText type="default" text="LOGIN"/>
              </NavLink>
            </div>
            <div>
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="REGISTER"/>
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  };

};

export default withRouter(RegisterUser)
