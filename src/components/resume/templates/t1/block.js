import React from 'react'
import './t1.css'

class Block extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:props.list || [],
      title:props.title || '',
      type:props.type || '',
      company:props.company || '',
      startDate:props.startDate || '',
      endDate:props.endDate || 'Present'
    }
  }

  componentWillReceiveProps(props){
    console.log(props)
    this.setState({
      list:props.list,
      title:props.title,
      type:props.type,
      company:props.company,
      startDate:props.startDate,
      endDate:props.endDate
    })
  }

  render() {
    let list
    if (this.state.list) {
      list = this.state.list.map((item,index) => {
        if (this.state.type === 'job') {
          return <li key={index}>{item}</li>
        } else if (item.level === this.state.title){
          return <li key={index}>{item.name}</li>
        } else {
          return ''
        }
      })
    }
    return (
      <div className="jh-t1-block">
        <h1>{this.state.title}</h1>
        {this.state.company &&
          <div className="jh-t1-job-details">
            <h3>{this.state.company} &bull; {this.state.startDate} - {this.state.endDate}</h3>
            <h4>Accomplishments</h4>
          </div>
        }
        <ul>
          {list}
        </ul>
      </div>

    );
  }
}

export default Block
