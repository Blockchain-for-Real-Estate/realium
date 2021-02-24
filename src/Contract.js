//import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
//IMPORT CONTRACT HERE
import Config from './config.json';
import Web3 from 'web3';
import Storage from './contracts/Storage.json';
const TruffleContract = require("truffle-contract");

export default class Contract {
    constructor(network){//, callback) {

        this.config = Config[network];
        let web3Provider = new Web3.providers.HttpProvider(this.config.url);
        //let web3Provider = new Web3.providers.WebsocketProvider(this.config.url.replace('http', 'ws'));
        this.web3 = new Web3(web3Provider);
        // this.flightSuretyApp = new this.web3.eth.Contract(FlightSuretyApp.abi, config.appAddress);
        this.storage = TruffleContract(Storage);
        this.storage.setProvider(web3Provider);
        //this.initialize(callback);
        this.owner = null;
        this.airlines = [];
        this.passengers = [];
    }

    // initialize(callback) {
    //     this.web3.eth.getAccounts((error, accts) => {
           
    //         this.owner = accts[0];
    //         console.log(this.owner);
    //         let counter = 1;

    //         callback();
    //     });
    // }

    async getContractInstance(){
        return await this.storage.at(this.config.appAddress);
    }

    async store(number) {
        //let self = this;
        let instance = await this.getContractInstance();
        console.log("NUMBER: ",number)
        return await instance.store(number);
    }

    async retrieve() {
        //let self = this;
        let instance = await this.getContractInstance();
        return await instance.retrieve()
    }

    // async registerAirline(request) {
    //     let caller = request.from || this.owner;
    //     let instance = await this.getContractInstance();
    //     return await instance.registerAirline(request.airline, {from: caller});
    // }
    // async registerFlight(request){
    //     let caller = request.from || this.owner;
    //     let instance = await this.getContractInstance();
    //     return await instance.registerFlight(request.flight, request.departure, request.airline, {from: caller});
    // }

    // async getFlight(request){
    //     let caller = request.from || this.owner;
    //     let instance = await this.getContractInstance();
    //     let result = await instance.getFlight(request.flight, {from: caller});
    //     console.log(result);
    //     return result;
    // }

    // async buyInsurance(request){
    //     console.log(request);
    //     let caller = request.from || this.owner;
    //     let instance = await this.getContractInstance();
    //     let paid = this.web3.utils.toWei(request.paid.toString(), "ether");
    //     let gasEstimateUnits = await instance.buyInsurance.estimateGas(request.flight, paid, {from: caller, value: paid});
    //     console.log(gasEstimateUnits);
    //     console.log(paid);
    //     return await instance.buyInsurance(request.flight, paid, {from: caller, value: paid, gas: 999999999});
    // }

    // async getInsurance(request){
    //     console.log(request);
    //     let instance = await this.getContractInstance();
    //     let result = await instance.getInsurance(request.id);
    //     console.log(result);
    //     return result;
    // }

    // async getCreditedAmount(request){
    //     let instance = await this.getContractInstance();
    //     let result = await instance.getCreditedAmount(request.address);
    //     console.log(result);
    //     return result;
    // }

    // async withdrawAmount(request){
    //     let caller = request.from || request.address;
    //     let instance = await this.getContractInstance();
    //     let amount = this.web3.utils.toWei(request.amount.toString(), "ether");
    //     return await instance.withdrawCreditedAmount(amount, request.address, {from: caller});
    // }
}