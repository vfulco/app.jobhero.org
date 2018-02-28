import React from 'react'
import RegisterUser from '../../components/forms/register-user'
import Header from '../../components/header'

class Register extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Header hideButtons={true}/>
        <RegisterUser/>
      </div>
    );
  }
}

export default Register
