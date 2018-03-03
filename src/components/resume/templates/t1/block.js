import React from 'react'
import './t1.css'
import moment from 'moment'

class T1Block extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:props.list || [],
      title:props.title || '',
      type:props.type || '',
      company:props.company || '',
      startDate:props.startDate || '',
      endDate:props.endDate
    }
  }

  componentWillReceiveProps(props){
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
        } else if(this.state.type === 'education'){
          return <li key={index}>{item.studyType} in {item.area} from the {item.institution}</li>
        } else if(this.state.type === 'interests'){
          return <li key={index}>{item.name}</li>
        } else if (item.level === this.state.title){
          return <li key={index}>{item.name}</li>
        } else {
          return ''
        }
      })
    }
    let startDate;
    if (this.state.startDate) {
      startDate = moment(this.state.startDate).format('MM-YYYY')
    }
    let endDate;
    if (this.state.endDate) {
      endDate = moment(this.state.endDate).format('MM-YYYY')
    } else {
      endDate = 'Present'
    }
    return (
      <div className={"jh-t1-block"}>
        <h1>{this.state.title}</h1>
        {this.state.company &&
          <div className="jh-t1-job-details">
            <h3>{this.state.company} &bull; {startDate} - {endDate}</h3>
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

export default T1Block
