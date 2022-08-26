import { LightningElement, track } from 'lwc';

export default class FiveConditionalRendering extends LightningElement {
        @track show=true;
        @track buttonLabel = "Show";

        handleClick(event){
            this.show = !this.show;
            this.buttonLabel = this.show ? "Hide" : "Show";
        }
}