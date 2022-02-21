import axios from '../module/axios'
import type { ISearchCondition, IUserList } from './interface'

interface IGetUserList {
  adminList: IUserList[]
  count: number
}

export default class UserService {
  static getUserList(condition: ISearchCondition): Promise<IGetUserList> {
    return axios.get('/agency/findAdminAgencyRel', { params: condition })
  }
}
