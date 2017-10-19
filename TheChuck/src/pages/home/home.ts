import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuoteserviceProvider} from "../../providers/quoteservice/quoteservice";
import {Quote} from "./quote";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chuckQuote: Quote;
  trumpQuote: Quote;

  constructor(private quoteservice: QuoteserviceProvider, private navController: NavController) {
  }

  ionViewWillEnter() {
    this.quoteservice.getChuckQuote().subscribe(quote => this.chuckQuote = quote);
  }

  GetChuckQuote() {
    this.quoteservice.getChuckQuote().subscribe(quote => this.chuckQuote = quote);
  }

  GetTrumpQuote() {
    this.quoteservice.getTrumpQuote().subscribe(quote => this.trumpQuote = quote);
  }


}
