import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Login from './enter/login'
import ResumeView from './resume/resume-view'
import ResumeList from './resume/resume-list'

let NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
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
            <PrivateRoute exact path='/resume/:id' component={ResumeView}/>
            <PrivateRoute exact path='/resume' component={ResumeList}/>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main
