import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { map, pluck } from "rxjs/operators";

export interface PairDetails {
  "Realtime Currency Exchange Rate": PairDetailed[];
}
export interface PairDetailed {
  "1. From_Currency Code": string;
  "2. From_Currency Name": string;
  "3. To_Currency Code": string;
  "4. To_Currency Name": string;
  "5. Exchange Rate": string;
  "6. Last Refreshed": string;
  "7. Time Zone": string;
  "8. Bid Price": string;
  "9. Ask Price": string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  exchangeValue = "Angular";

  constructor(apiService: ApiService) {
    apiService
      .getExchangeRate("hello", "world")
      .pipe(
        map(x => x["Realtime Currency Exchange Rate"]),
        pluck("5. Exchange Rate")
      )
      .subscribe((v: PairDetails) => {
        console.log(v);
        this.exchangeValue = v;
      });
  }
}
