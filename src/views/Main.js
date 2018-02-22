import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import ViewResume from './resume/view-resume'

class Main extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ViewResume}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main
