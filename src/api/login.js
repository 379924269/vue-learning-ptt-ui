import httpClient from 'config'

class Login {
  submit (params) {
    httpClient.post('/login', params)
  }
}

export default new Login()
