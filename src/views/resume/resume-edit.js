import React from 'react'
import Resume from '../../components/resume'

class ResumeEdit extends React.Component {
  render() {
    return (
      <div>
        <h1>Editing Resume</h1>
        <Resume id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default ResumeEdit
