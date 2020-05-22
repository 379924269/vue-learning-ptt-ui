import service from './config'
import pathConst from '@/constant/pathConst'

export default{
  submit (params) {
    return service.post(pathConst.getBaseUrl() + '/login', params)
  }
}
