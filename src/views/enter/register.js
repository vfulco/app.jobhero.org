import React from 'react'
import RegisterUser from '../../components/forms/register-user'

class Register extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <RegisterUser/>
      </div>
    );
  }
}

export default Register
