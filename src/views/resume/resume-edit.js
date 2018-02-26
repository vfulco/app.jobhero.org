import React from 'react'
import Resume from '../../components/resume'

class ResumeEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section:props.match.params.section,
      id:props.match.params.id,
      resume:props.location.state.resume
    }
  }
  render() {
    return (
      <div>
        edit {this.state.id} {this.state.section} {JSON.stringify(this.state.resume)}
      </div>
    );
  }
}

export default ResumeEdit
