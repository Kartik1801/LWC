import { LightningElement, track } from 'lwc';
import getAccounts from "@salesforce/apex/wireDemoClass.getAccountList";

const columns = [
    {
        label: "Id",
        fieldName: "Id"
    },
    {        
        label: "Name",
        fieldName: "Name"
    },
    {
        
        label: "Number of Employee",
        fieldName: "NumberOFEmployees"
    }
];

export default class SixForEach extends LightningElement {
    @track data = [];
    @track columns = columns

    connectedCallback(){
        getAccounts()
        .then((data)=> {
            this.data = data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}