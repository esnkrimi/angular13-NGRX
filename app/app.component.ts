import { Component, OnInit, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay,auditTime,throttleTime,debounceTime, max, min, concat, take, tap, concatMap, from, fromEvent, interval, map, mergeMap, observable, Observable, of, distinct, distinctUntilChanged, switchMap, last, first, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currency$;
  o: any
  o2: any
  ob = [{ s: 'eh', id: 10 }, { s: 'eh', id: 20 }, { s: 'y', id: 30 }]
  ob2 = [{ a: 'eh', i: 1 }, { a: 'xx', i: 2 }, { a: 'xx', i: 3 }, { a: 'xx', i: 4 },]
  constructor(
    private store: Store
  ) { }
  ngOnInit() {
    const r1 = from(this.ob)
    const r2 = from(this.ob2)
    const result = r1.pipe(
      //distinct(x=>x.id),
      switchMap(x =>
        r2.pipe(
          delay(1000),
          distinct(x => x.i),
          map(y => x.id + "-" + y['i'])
        ))
    );

    const obs=forkJoin({
      r1 : from(this.ob),
      r2 : from(this.ob2),
      r3:result
    })
    obs.subscribe(x => console.log(x));

  }
} 