import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { lazyAction } from '../state/actions'
import { selectLazy } from '../state/selects'
import { selectEffect } from '../state/selects'
@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent implements OnInit {
  l:any;
  constructor(private route: ActivatedRoute, private store: Store) {}  
  lazyAction() {
    this.route.paramMap.subscribe((data) => {
      let currency:any = data.get('currency')
      this.store.dispatch(lazyAction({ l: currency||null }))
    }) 
  }

  lazySelect() {
       this.store.select(selectLazy).subscribe((data:any) => {
        this.l = data['l']
        console.log(this.l)       })
  }

  effectSelect() {
    this.store.select(selectEffect).subscribe((data:any) => {
      console.log(data['price'])

    })
}


  ngOnInit(): void {}
}