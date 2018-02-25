import React from 'react'
import { withRouter } from 'react-router-dom'
import './header.css'
import Logo from '../../images/job-hero-logov1.svg'
import Button from '../button'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps(props){
  }

  handlePrint() {
  window.print();
  };

  handleRegister() {
  this.props.history.push('/login')
  };

  render() {
    return (
      <div className="jh-header-container jh-noprint">
        <div className="jh-header-flex">
          <div className="jh-header-logo-container">
            <div className="jh-header-logo" style={{backgroundImage:'url(' + Logo + ')'}}></div>
            <h1 className="jh-header-title">JOBHERO</h1>
          </div>
          <div className="jh-header-buttons-container">
            <div>
              <a onClick={this.handlePrint.bind(this)}>
                <Button text="PRINT"/>
              </a>
            </div>
            <div>
              <a onClick={this.handleRegister.bind(this)}>
                <Button text="CREATE ACCOUNT"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)
