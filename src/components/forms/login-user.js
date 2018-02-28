import React from 'react'
import './forms.css'
import Authentication from '../../api/authentication.js'
import ButtonText from '../buttons/button-text'
import { NavLink, withRouter,Redirect } from 'react-router-dom'

class LoginUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: false,
      redirectToReferrer: false,
      from:this.props.from
    };
  };

  componentDidMount(){
  };

  loginUser(email,password){
    this.setState({loading:true});
    Authentication.loginUser(email,password)
    .then((user)=> {
      console.log('user',user)
      window.localStorage.user = JSON.stringify(user.data.data);
      this.setState({ redirectToReferrer: true });
      // this.props.history.push('/resume')
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
    this.loginUser(email, password)
  };

  render(){
    if (this.state.redirectToReferrer) {
      return <Redirect to={this.state.from} />;
    }
    return (
      <div className="jh-enter-form-container">
        <form className="jh-enter-form" onSubmit={this.handleSignIn.bind(this)}>
          <h1 className="jh-enter-form-heading">
            LOGIN
          </h1>
          <p className="jh-edit-form-details">
            Log in to your Job Hero account
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
              <NavLink to='/register' activeClassName="">
                <ButtonText type="default" text="REGISTER"/>
              </NavLink>
            </div>
            <div>
              <button type="submit">
                <ButtonText loading={this.state.loading} type="success" text="LOGIN"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

};

export default withRouter(LoginUser)
