import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { appReducer } from './store/app.state';
import { CustomSerializer } from './store/router/costum.serializer';
import { metaReducers} from './meta';
import { CurrencyEffects} from './lazy/state/lazy.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer,{metaReducers}),
    EffectsModule.forRoot([CurrencyEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      serializer:CustomSerializer
    }),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:environment.production})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
}) 
export class AppModule {}