import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginUser from '../../components/forms/login-user'
import Header from '../../components/header'

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/resume" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Header hideButtons={true}/>
        <LoginUser from={from} redirectToReferrer={redirectToReferrer}/>
      </div>
    );
  }
}

export default Login
