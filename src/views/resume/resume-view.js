import React from 'react'
import Resume from '../../components/resume'

class ResumeView extends React.Component {
  render() {
    return (
      <div>
        <h1>Viewing Resume</h1>
        <Resume id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default ResumeView
