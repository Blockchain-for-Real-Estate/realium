import axios from 'axios'
import { convalent_environment as environment} from "../../environment"
import { api_key } from "../../environment"
import { GetERC20TokenTransfers } from "../interfaces/covalent.interface";

export class ApiCovalentService {
    public getTransfers(contractAddress: string, walletAddress: string) {
        return axios.get<GetERC20TokenTransfers>(
          `${environment.api}address/${walletAddress}/transfers_v2/?contract-address=${contractAddress}&key=${api_key.api_key}}`
        )
      }
}