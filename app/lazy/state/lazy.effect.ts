import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CurrencyService } from '../service';
import { effectAction, lazyAction } from './actions';

@Injectable()
export class CurrencyEffects {
  l;
  loadCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(lazyAction),
    mergeMap(
      (k) => this.currencyService.getCurrency(k)
        .pipe(map((m) => effectAction({m: m,b: k['l']})))
    ))
  );
  constructor(private actions$: Actions, private currencyService: CurrencyService) { }
}