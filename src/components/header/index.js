import React from 'react'
import { withRouter } from 'react-router-dom'
import './header.css'
import Logo from '../../images/job-hero-logov1.svg'
import ButtonText from '../buttons/button-text'

function getAuth() {
  let authToken;
  if (window.localStorage.user && JSON.parse(window.localStorage.user).token) {
    authToken = JSON.parse(window.localStorage.user).token;
  }
  return authToken;
}

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      authenticated:getAuth(),
      printButton: this.props.printButton,
      backButton: this.props.backButton,
      hideButtons: this.props.hideButtons
    }
  }

  componentWillReceiveProps(props){
  }
  handlePrint() {
    window.print()
  }
  handleBack() {
    this.props.history.push('/resume')
  }

  handleRegister() {
    this.props.history.push('/register')
  }

  handleLogout(){
    window.localStorage.clear()
    this.props.history.push("/login")
  }

  render() {
    return (
      <div className="jh-header-container jh-noprint">
        <div className="jh-header-flex">
          <div className="jh-header-logo-container">
            <div className="jh-header-logo" style={{backgroundImage:'url(' + Logo + ')'}}></div>
            <h1 className="jh-header-title">JOBHERO</h1>
          </div>
          <div className="jh-header-buttons-container">
            {this.state.backButton === true &&
              <div>
                <a onClick={this.handleBack.bind(this)}>
                  <ButtonText text="MY RESUMES"/>
                </a>
              </div>
            }
            {this.state.printButton === true &&
              <div>
                <a onClick={this.handlePrint.bind(this)}>
                  <ButtonText text="PRINT"/>
                </a>
              </div>
            }
            {this.state.authenticated &&
              <div>
                <a onClick={this.handleLogout.bind(this)}>
                  <ButtonText text="LOGOUT"/>
                </a>
              </div>
            }
            {!this.state.authenticated && this.state.hideButtons !== true &&
              <div>
                <a onClick={this.handleRegister.bind(this)}>
                  <ButtonText text="CREATE ACCOUNT"/>
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)
