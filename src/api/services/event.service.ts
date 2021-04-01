import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Event } from "../interfaces/event.interface";

export class ApiEventService {
    
    public getTransactions() {
      return axios.get<Event>(
        `${environment.api}/api/events/`
      );
    }

    public getFilteredTransactions(id: String) {
        return axios.get<Event>(
          `${environment.api}/api/events?property=${id}`
        );
    }
  
    public postTransaction(data: Event) {
      return axios.post<Event>(
        `${environment.api}/api/events/`,
        data
      );
    }
  
    //may not be necessary
    public patchTransaction(data: Partial<Event>) {
      return axios.patch<Event>(
        `${environment.api}/api/events/`,
        data
      );
    }
  }