import { django_environment as environment } from "../../environment"
import axios from 'axios'
import { User } from "../interfaces/user.interface";

export class ApiUserService {
    constructor() { }
  
    public getUser() {
      return axios.get<User>(
        `${environment.api}/api/users`
      );
    }
  
    public postUser(data: User) {
      return axios.post<User>(
        `${environment.api}/api/users`,
        data
      );
    }
  
    //may not be necessary
    public patchUser(data: Partial<User>) {
      return axios.patch<User>(
        `${environment.api}/api/users`,
        data
      );
    }
  }