# angular13-NGRX
This project include action ,effect and selects for fetching currency rates at ***FOREX market***
****


**1**.
```diff
Component Dispatch action and it will set currency symbol(JPY-USD-CHN) from routing parameter into lazy pool. 

+      lazyAction() {
-      this.route.paramMap.subscribe((data) => {
-        let currency:any = data.get('currency')
-        this.store.dispatch(lazyAction({ l: currency||null -}))
-      })
+}
 ````
**2.** 
```diff 
First selector will fetch this symbol from pool

+      lazySelect() {
-           this.store.select(selectLazy).subscribe((data:any-) => {
-            this.l = data['l']
-            console.log(this.l)       })
+      }
  
 ```
**3.** 
```diff 
EffectAction will run while action finished.this is a side effect of first action
```
**4.**
```diff
EffectAction get symbol from pool and pass it to service api injected in root
  and fetch rate to effectpool via effect reducer

+      @Injectable()
+      export class CurrencyEffects {
-        l;
-        loadCurrency$ = createEffect(() => -this.actions$.pipe(
-          ofType(lazyAction),
-          mergeMap(
-            (k) => this.currencyService.getCurrency(k)
-              .pipe(map((m) => effectAction({m: m,b: -k['l']})))
-          ))
-        );
-        constructor(private actions$: Actions, private -currencyService: CurrencyService) { }
+      }

```
**5.**
```diff
Effect selector fetch rate and pass it to component

+      effectSelect() {
-        this.store.select(selectEffect).subscribe((data:any) -=> {
-          console.log(data['price'])
-        })
+}
```
