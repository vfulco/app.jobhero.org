import React from 'react'
import './t1.css'

class Block extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:props.list || [],
      title:props.title || ''
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      list:props.list,
      title:props.title
    })
  }

  render() {
    let list
    if (this.state.list) {
      list = this.state.list.map((item,index) => {
        if (item.level === this.state.title){
          return <li key={index}>{item.name}</li>
        } else {
          return ''
        }
      })
    }
    return (
      <div className="jh-t1-block">
        <h1>{this.state.title}</h1>
        <ul>
          {list}
        </ul>
      </div>

    );
  }
}

export default Block
