import { LightningElement } from 'lwc';

export default class OneLWCParent extends LightningElement {
    item = "Hello from Parent";

    handleClick(){
        this.template.querySelector("c-one-l-w-c-child").handleChange();
    }
}