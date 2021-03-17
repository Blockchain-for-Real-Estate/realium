import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Transaction } from "../interfaces/transaction.interface";

export class ApiTransactionService {
    
    public getTransactions() {
      return axios.get<Transaction>(
        `${environment.api}/api/transactions/`
      );
    }

    public getTransactionsByAssetId(id: String) {
        return axios.get<Transaction>(
          `${environment.api}/api/transactions/${id}`
        );
    }
  
    public postTransaction(data: Transaction) {
      return axios.post<Transaction>(
        `${environment.api}/api/transactions/`,
        data
      );
    }
  
    //may not be necessary
    public patchTransaction(data: Partial<Transaction>) {
      return axios.patch<Transaction>(
        `${environment.api}/api/transactions`,
        data
      );
    }
  }