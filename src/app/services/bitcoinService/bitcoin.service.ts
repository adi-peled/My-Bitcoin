import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }


  public getRate(currency = 'usd') {  // return promise
    return this.http.get(`https://blockchain.info/tobtc?currency=${currency}&value=1`)
  }

  getMarketPrice() {
    console.log('get market price');
  }

  getConfirmedTransactions() {
    console.log('get cconfirmed');
  }

}
