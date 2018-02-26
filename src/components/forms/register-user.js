import React from 'react'
import './forms.css'
import Authentication from '../../api/authentication.js'
import ButtonText from '../buttons/button-text'
import { NavLink, withRouter,Redirect } from 'react-router-dom'

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
      <div className="jh-edit-form-container">
        <h1 className="jh-edit-form-heading">
          REGISTER
        </h1>
        <form className="jh-edit-form" onSubmit={this.handleSignIn.bind(this)}>
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
          <div className="jh-form-button-container">
            <div>
              <NavLink to='/login' activeClassName="">
                <ButtonText type="default" text="LOGIN"/>
              </NavLink>
            </div>
            <div>
              <NavLink to='/forgot' activeClassName="">
                <ButtonText type="default" text="FORGOT"/>
              </NavLink>
            </div>
            <div>
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="REGISTER"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

};

export default withRouter(RegisterUser)
