import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable()
export class ApiService {

  constructor() {}
  getExchangeRate(pair1: string, pair2: string) {
    return of({
"Realtime Currency Exchange Rate": {
    "1. From_Currency Code": "USD",
    "2. From_Currency Name": "United States Dollar",
    "3. To_Currency Code": "NOK",
    "4. To_Currency Name": "Norwegian Krone",
    "5. Exchange Rate": "10.60921000", //Need to obtain just this one
    "6. Last Refreshed": "2020-04-25 18:34:28",
    "7. Time Zone": "UTC",
    "8. Bid Price": "10.60921000",
    "9. Ask Price": "10.61031000"
}
    });
    
    // return this.http.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${pair1}&to_currency=${pair2}&apikey=demo`);
  }
}