import { LightningElement, track } from 'lwc';

export default class TwoLWCTrackDemo extends LightningElement {
    @track fullName = {
        firstName: "Kartik",
        lastName: "Dhawan"
    }

    handleChange(e){

        if (e.target.name == "firstName"){
            this.fullName.firstName = e.target.value;
        }
        if(e.target.name == "lastName"){
            this.fullName.lastName = e.target.value;
        }
    }
}