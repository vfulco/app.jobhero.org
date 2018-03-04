import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import GoogleTagManager from '../components/gtm'
import Login from './enter/login'
import Register from './enter/register'
import ResumeView from './resume/resume-view'
import ResumeList from './resume/resume-list'
import ResumeEdit from './resume/resume-edit'
import ResumeShared from './resume/resume-shared'
import ResumeFirst from './resume/resume-first'

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
      window.localStorage.user ? (
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
      window.localStorage.user ? (
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
        {!window.location.hostname.includes('local') &&
          <GoogleTagManager gtmId='GTM-M5272PR' />
        }
        <BrowserRouter>
          <Switch>
            <RedirectRoute exact path='/login' component={Login}/>
            <RedirectRoute exact path='/register' component={Register}/>
            <PrivateRoute exact path='/resume' component={ResumeList}/>
            <PrivateRoute exact path='/resume/:id' component={ResumeView}/>
            <PrivateRoute exact path='/resume-first' component={ResumeFirst}/>
              <PrivateRoute exact path='/resume/:id/edit/:section' component={ResumeEdit}/>
            <Route exact path='/resume-shared/:share_id' component={ResumeShared}/>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main
