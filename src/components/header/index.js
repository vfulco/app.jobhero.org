import React from 'react'
import './header.css'
import Logo from '../../images/job-hero-logov1.svg'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps(props){
  }

  print() {
  window.print();
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
              <a onClick={this.print.bind(this)}>
                PRINT
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
