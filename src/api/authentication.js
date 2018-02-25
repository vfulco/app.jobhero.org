/* eslint-disable no-undef */

import axios from 'axios'

var apiRoot;
if (window.location.hostname.includes('local')) {
  apiRoot = 'http://localhost:8080'
} else if (window.location.hostname.includes('jobhero')){
  apiRoot = 'https://api.jobhero.org'
}

function getAuth() {
  let authToken;
  if (window.localStorage.user && JSON.parse(window.localStorage.user).token) {
    authToken = JSON.parse(window.localStorage.user).token;
  }
  return authToken;
}

function loginUser(email, password) {
  return axios.post(apiRoot + '/api/v1/auth/login', {
      email: email,
      password: password
    })
}

function registerUser(email, password) {
  return axios.post(apiRoot + '/api/v1/auth/register', {
      email: email,
      password: password
    })
}

function resetPassword(token, password) {
  return axios.post(apiRoot + '/api/v1/auth/reset', {
      token: token,
      password: password
    })
}

function forgotPassword(email) {
  return axios.post(apiRoot + '/api/v1/auth/forgot', {
      email: email
    })
}

function logoutUser() {
  return axios.get({
    url:apiRoot + '/api/v1/auth/logout',
    headers: {'auth_token': getAuth()}
  })
}

const Authentication = {
  loginUser,
  registerUser,
  logoutUser,
  forgotPassword,
  resetPassword
};
export default Authentication
