import React from 'react'
import { withRouter } from 'react-router-dom'
import Resume from '../../components/resume'
import Header from '../../components/header'
import ResumeApi from '../../api/resume'
import LoadingAnimation from '../../components/loading-animation'

class ResumeView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:{},
      resume_id:props.match.params.id,
      resume_name:'',
      loading:true
    }
  }

  getResumeFromApi(){
    ResumeApi.getResume(this.state.resume_id)
    .then((ownedResume)=> {
      this.setState({
        loading:false,
        resume_name: ownedResume.data.data.name,
        resume: ownedResume.data.data
      })
    })
    .catch((error)=>{
      console.log(error)
      this.props.history.push('/login')
    })
  }

  componentDidMount(){
    this.getResumeFromApi()
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Header printButton={true} backButton={true} />
        <Resume loading={this.state.loading} id={this.state.resume_id} name={this.state.resume_name} resume={this.state.resume}  shared=""/>
      </div>
    );
  }
}

export default withRouter(ResumeView)
