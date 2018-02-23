import React from 'react'

class Resume extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {}
    }
  }

  componentWillReceiveProps(props){
    this.setState({resume:props.resume})
  }

  render() {
    return (
      <div>
        <h1>Rendered Resume</h1>
        {JSON.stringify(this.state.resume)}
      </div>
    );
  }
}

export default Resume
