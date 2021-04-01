import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Token } from "../interfaces/token.interface";

export class ApiTokenService {
    
    public getTokens() {
      return axios.get<Token>(
        `${environment.api}/api/tokens/`
      );
    }

    public getPropertyTokens(id: String) {
        return axios.get<Token>(
          `${environment.api}/api/tokens/?property=${id}`
        );
    }

    public getUserTokens(id: String) {
        return axios.get<Token>(
          `${environment.api}/api/tokens/?owner=${id}`
        );
    }
  
    public postToken(data: Token) {
      return axios.post<Token>(
        `${environment.api}/api/tokens/`,
        data
      );
    }
  
    //may not be necessary
    public patchToken(data: Partial<Token>) {
      return axios.patch<Token>(
        `${environment.api}/api/tokens/`,
        data
      );
    }
  }