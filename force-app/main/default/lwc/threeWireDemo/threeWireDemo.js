import { LightningElement, track, wire } from 'lwc';
import getAccountList from "@salesforce/apex/wireDemoClass.getAccountList";

const columns = [ 
    {
        label: "id",
        fieldName: "Id"
    },
    {
        label: "Name", 
        fieldName: "Name"       
    },
    {
        label: "Number of Employees",
        fieldName: "NumberOfEmployees"
    }
];

export default class WireDemo extends LightningElement {
    @track columns = columns;
    @track data = []; 
    @wire(getAccountList)
    fetchedData({data, error}){
        if(data){
            console.log(data);
            this.data = data; 
        }
        else if(error){
            console.log(error);
        }
    }
}