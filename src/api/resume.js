/* eslint-disable no-undef */

import axios from 'axios';

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

function getAllResumes() {
  return axios({
      method: 'get',
      url: apiRoot + '/api/v1/resume/',
      headers: {'auth_token': getAuth()}
    })
}

function getSharedResume(sharedId) {
  return axios({
      method: 'get',
      url: apiRoot + '/api/v1/resume/shared/' + sharedId
    })
}

function getResume(id) {
  return axios({
      method: 'get',
      url: apiRoot + '/api/v1/resume/' + id,
      headers: {'auth_token': getAuth()}
    })
}

const ResumeApi = {
  getSharedResume,
  getResume,
  getAllResumes
};
export default ResumeApi
