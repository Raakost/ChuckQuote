import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {getResponseURL} from "@angular/http/src/http_utils";
import {Observable} from "rxjs";
import {Quote} from "../../pages/home/quote";


/*
 Generated class for the QuoteserviceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class QuoteserviceProvider {


  ChuckAPI = 'http://api.icndb.com/jokes/random';
  TrumpAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  constructor(private http: Http) {

  }

  getChuckQuote(): Observable<Quote> {
    return this.http.get(this.ChuckAPI)
      .map(response => response.json() as Object);
  }

  getTrumpQuote(): Observable<Quote> {
    return this.http.get(this.TrumpAPI)
      .map(response => response.json() as Object);
  }


}
