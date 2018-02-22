import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const AuthButton = withRouter(
  ({ history }) =>
    window.localStorage.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            window.localStorage.isAuthenticated = false
            history.push("/login");
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

class ResumeList extends React.Component {
  render() {
    return (
      <div>
        <AuthButton />
        <h1>List all resumes</h1>
        <Link to="/resume/1">resume 1</Link>
        <Link to="/resume/2">resume 2</Link>
        <Link to="/resume/3">resume 3</Link>
      </div>
    );
  }
}

export default ResumeList
