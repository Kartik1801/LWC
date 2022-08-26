import { LightningElement } from 'lwc';

export default class OneLWCParent extends LightningElement {
    item = "Hello from Parent";

    handleClick(){
        const child = this.template.querySelector("c-one-l-w-c-child");
        child.handleEventChage();
    }
}