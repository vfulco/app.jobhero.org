import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Resume from '../../components/resume'
import Header from '../../components/header'

class ResumeView extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Resume id={this.props.match.params.id} shared=""/>
      </div>
    );
  }
}

export default withRouter(ResumeView)
