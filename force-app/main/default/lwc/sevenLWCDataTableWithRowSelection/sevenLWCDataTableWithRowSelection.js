import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/wireDemoClass.getAccountList';

const columns = [
    {
        Label: "Id",
        FieldName: "Id"
    },
    {
        Label: "Name",
        FieldName: "Name"
    },
    {
        Label: "Number of Employees",
        FieldName: "NumberOfEmployees"
    }
]

export default class SevenLWCDataTableWithRowSelection extends LightningElement {
    columns = columns;
    data = [];

    

}