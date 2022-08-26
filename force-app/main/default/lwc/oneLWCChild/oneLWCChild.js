import { api, LightningElement } from 'lwc';

export default class OneLWCChild extends LightningElement {
    // with out @api decorator parent cant access / modify child's properties
    @api item = "Hello from Child";

    @api
    handleChange(){
        this.item = "button was pressed";
    }
}