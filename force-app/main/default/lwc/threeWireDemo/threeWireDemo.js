import { LightningElement, track, wire } from 'lwc';
import getContacts from "@salesforce/apex/ImperativeDemo.getContacts";

const columns = [ 
    {
        label: "ID",
        fieldName: "Id"
    },
    {
        label: "Name", 
        fieldName: "Name"               
    }
];

export default class WireDemo extends LightningElement {
    @track columns = columns;
    @track data = []; 
    @wire(getContacts)
    fetchedData({data, error}){
        if(data){
            this.data = data; 
        }
        else if(error){
            console.log(error);
        }
    }
}