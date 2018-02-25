import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Resume from '../../components/resume'


class ResumeView extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/resume/' + this.props.match.params.id + '/edit'}>edit</Link>
        <Resume id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default withRouter(ResumeView)
