import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Property } from "../interfaces/property.interface";

export class ApiPropertyService {
  
    public getAssets() {
      return axios.get<Property>(
        `${environment.api}/api/properties/`
      );
    }

    public getAssetById(id: String) {
      return axios.get<Property>(
        `${environment.api}/api/properties?propertyId=${id}`
      );
    }

    public getAssetShareListings(id: String) {
      return axios.get<Property>(
        `${environment.api}/api/properties?avalancheAssetId=${id}&listed=true`
      );
    }
  
    public postAsset(data: Property) {
      return axios.post<Property>(
        `${environment.api}/api/properties`,
        data
      );
    }
  
    //may not be necessary
    public patchAsset(data: Partial<Property>) {
      return axios.patch<Property>(
        `${environment.api}/api/properties`,
        data
      );
    }
  }