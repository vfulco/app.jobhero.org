import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Login from './enter/login'
import ResumeView from './resume/resume-view'
import ResumeList from './resume/resume-list'
import ResumeEdit from './resume/resume-edit'
import ResumeShared from './resume/resume-shared'

let NoMatch = ({ location }) => (
  <div>
    <h3>
      <Redirect to={{pathname: "/resume"}}/>
    </h3>
  </div>
);

let PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      JSON.parse(window.localStorage.isAuthenticated) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
let RedirectRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      JSON.parse(window.localStorage.isAuthenticated) ? (
        <Redirect
          to={{
            pathname: "/resume",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class Main extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <RedirectRoute exact path='/login' component={Login}/>
            <PrivateRoute exact path='/resume' component={ResumeList}/>
            <PrivateRoute exact path='/resume/:id' component={ResumeView}/>
            <Route exact path='/resume-shared/:share_id' component={ResumeShared}/>
            <PrivateRoute exact path='/resume/:id/edit' component={ResumeEdit}/>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main
