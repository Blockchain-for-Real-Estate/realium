import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Asset } from "../interfaces/asset.interface";

export class ApiAssetService {
  
    public getAssets() {
      return axios.get<Asset>(
        `${environment.api}/api/assets/`
      );
    }

    public getAssetById(id: String) {
      return axios.get<Asset>(
        `${environment.api}/api/assets?asset=${id}`
      );
    }

    public getAssetShareListings(id: String) {
      return axios.get<Asset>(
        `${environment.api}/api/assets?avalancheAssetId=${id}&listed=true`
      );
    }
  
    public postAsset(data: Asset) {
      return axios.post<Asset>(
        `${environment.api}/api/assets`,
        data
      );
    }
  
    //may not be necessary
    public patchAsset(data: Partial<Asset>) {
      return axios.patch<Asset>(
        `${environment.api}/api/assets`,
        data
      );
    }
  }