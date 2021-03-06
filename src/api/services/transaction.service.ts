import { avax_environment as environment} from "../../../environment"
import axios from 'axios'
import { Transaction } from "../interfaces/transaction.interface";

export class ApiTransactionService {
    constructor() { }
  
    public getAsset() {
      return axios.get<Transaction>(
        `${environment.api}/api/transactions`
      );
    }
  
    public postAsset(data: Transaction) {
      return axios.post<Transaction>(
        `${environment.api}/api/transactions`,
        data
      );
    }
  
    //may not be necessary
    public patchAsset(data: Partial<Transaction>) {
      return axios.patch<Transaction>(
        `${environment.api}/api/transactions`,
        data
      );
    }
  }