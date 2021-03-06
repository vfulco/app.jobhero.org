import React from 'react'
import { withRouter } from 'react-router-dom'
import './header.css'
import Logo from '../../images/job-hero-logov2.svg'
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
            <p className="jh-header-beta">&nbsp; BETA</p>
          </div>
          <div className="jh-header-buttons-container">
            {this.state.backButton === true &&
              <div>
                <button onClick={this.handleBack.bind(this)}>
                  <ButtonText text="MY RESUMES"/>
                </button>
              </div>
            }
            {this.state.printButton === true &&
              <div>
                <button onClick={this.handlePrint.bind(this)}>
                  <ButtonText text="PRINT"/>
                </button>
              </div>
            }
            <div>
              <a href="mailto:info@jobhero.org">
                <ButtonText text="CONTACT"/>
              </a>
            </div>
            {this.state.authenticated &&
              <div>
                <button onClick={this.handleLogout.bind(this)}>
                  <ButtonText text="LOGOUT"/>
                </button>
              </div>
            }
            {!this.state.authenticated && this.state.hideButtons !== true &&
              <div>
                <button onClick={this.handleRegister.bind(this)}>
                  <ButtonText text="CREATE ACCOUNT"/>
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)
