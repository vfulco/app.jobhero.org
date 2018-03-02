import React from 'react'
import './resume.css'
import { Link } from 'react-router-dom'
import ResumeTemplate1 from './templates/t1'
import ButtonText from '../buttons/button-text'
import {
  FacebookShareButton,
  FacebookIcon,

} from 'react-share';

class Resume extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      resume:props.resume || {},
      shared:props.shared,
      name:props.name,
      id:props.id,
      loading:props.loading
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      resume:props.resume,
      shared:props.shared,
      name:props.name,
      id:props.id,
      loading:props.loading
    })
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
        {!this.state.shared &&
        <div className="jh-resume-menu jh-noprint">
          <div className="jh-resume-menu-flex">
            <div>
              <FacebookShareButton
                 url={"https://jobhero.org/resume-shared/" + this.state.resume.share_id}
                 quote={"Check Out My Resume! Made With jobhero.org"}
                 hashtag={"#resume"}
                 className="Demo__some-network__share-button">
                 <FacebookIcon
                   size={32}
                   round />
               </FacebookShareButton>
            </div>
            <div>
              <Link target="_blank" to={"/resume-shared/" + this.state.resume.share_id}>
                <ButtonText text="OPEN PUBLIC LINK"/>
              </Link>
            </div>
          </div>
        </div>
        }
        <ResumeTemplate1 loading={this.state.loading} id={this.state.id} resume={this.state.resume} shared={this.state.shared}/>
      </div>
    );
  }
}

export default Resume
