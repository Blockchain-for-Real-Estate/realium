import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Avax } from "../interfaces/avax.interface";

export class ApiEventService {

    public getAvaxAmount() {
        return axios.get<Avax>(
            'https://min-api.cryptocompare.com/data/pricemulti?fsyms=AVAX&tsyms=USD'
        );
    }
}