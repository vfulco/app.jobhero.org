import React from 'react'
import { Redirect } from 'react-router-dom'
import RegisterUser from '../../components/forms/register-user'

class Register extends React.Component {

  render() {
    return (
      <div>
        <RegisterUser/>
      </div>
    );
  }
}

export default Register
