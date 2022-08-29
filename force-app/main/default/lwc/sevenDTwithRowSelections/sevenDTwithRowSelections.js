import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/wireDemoClass.getAccountList';

const columnList = [
    {
        label: 'ID',
        fieldName : 'Id'
    },
    {
        label: 'Name',
        fieldName: 'Name'
    },
    {
        label: 'Email',
        fieldName: 'Email'
    }
]; 

export default class SevenDTwithRowSelections extends LightningElement {
    
    @track columns = columnList;
    @track data = [];
    @track selectedItems = [];

    @track showDataTable = true;
    @track showSearchField = false;

    @track showDataTableButtonValue = 'Hide';
    @track searchButtonValue = 'Search';
    
    handleShowDataTableButtonClick(event){
        this.showDataTable = !this.showDataTable;
        this.showDataTableButtonValue = this.showDataTable ? 'Hide' : 'Show';        
    }
    
    handleSearchButtonClick(event){
        this.showSearchField = !this.showSearchField;
        this.searchButtonValue = this.showSearchField ? 'Cancel' : 'Search';        
    }
    
    handleSearch(event){
        if(event){

            console.log(event.trigger.value);
        }
    }

    getSelectedRow(event){
        event.detail.selectedRows.forEach(element => {
        });
        this.selectedItems = event.detail.selectedRows;
    }
    
    connectedCallback(){
        getAccountList()
        .then(res => {
            this.data = res;
        })
    }
}