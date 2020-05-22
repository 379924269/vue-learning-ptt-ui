import service from './config'
class Login {
  submit (params) {
    return service.post('http://192.168.0.160:8082/login', params)
  }
}
export default new Login()
