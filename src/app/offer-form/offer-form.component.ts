import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';


@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})


export class OfferFormComponent implements OnInit {

  types = ['1 Time Purchase','Reoccuring Purchase Reward','Best Before Date Purchase'];
  
  numbers = Array(10).fill(0).map((x,i)=>i+1);
 // numbers = Array(10).fill(0).map((x,i)=>i);

constructor() { }

  ngOnInit() {
  }


  /* public strName: string,
        public strType: string,
        public intPrchUnlock: number,
        public dblReVal: string, // type check!
        public strUPCs: string,
        public strReq: string,
        public dtBestDate?: string, // type check!
*/

  model = new Offer('TestOffer','1 Time Purchase',3,'12.34','UPC','extra request', '2018-01-01');
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }

}
