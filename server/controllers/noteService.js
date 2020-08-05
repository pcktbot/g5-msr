const axios = require('axios')

const {
  NOTE_SERVICE_USERNAME: username,
  NOTE_SERVICE_PASSWORD: password,
  NOTE_SERVICE_URL: noteServiceUrl,
  NOTE_SERVICE_TOKEN: token
} = process.env

module.exports = {
login,
getNotes
}

function login () {
  return axios.post(`${noteServiceUrl}/api/v1/login`, { username, password })
}

function getNotes(clientUrn) {
  return axios.get(`${noteServiceUrl}/api/v1/notes?access_token=${token}&clientUrn=${clientUrn}`)
}