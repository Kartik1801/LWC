import { LightningElement, track } from 'lwc';
import getContactList from "@salesforce/apex/ImperativeDemo.getContacts";

const columns = [
    {
        label: "ID",
        fieldName: "Id"
    },
    {
        label: "Name",
        fieldName: "Name"
    },
    {
        label: "Email",
        fieldName: "Email"
    }
]

export default class FourImperativeDemo extends LightningElement {
    @track data = [];
    @track columns = columns;

    connectedCallback(){
        getContactList()
            .then((res)=>{
                this.data = res;
            })
            .catch(error =>{
                console.log(error);
            })
    }

}