import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getCurrency(k): Observable<any> {
    console.log('effect.......')
    return this.http.get(
      'https://min-api.cryptocompare.com/data/pricemulti?fsyms='+k.l+'&tsyms=usd,jpy',
    )
  }

  login(): Observable<any> {
    let osb$=of(1,2,3,4,5);
    return osb$;
  }
}
