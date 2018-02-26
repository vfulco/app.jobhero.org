import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginUser from '../../components/forms/login-user'

const fakeAuth = {
  authenticate(cb) {
    window.localStorage.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  }
};

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/resume" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <LoginUser from={from} redirectToReferrer={redirectToReferrer}/>
      </div>
    );
  }
}

export default Login
