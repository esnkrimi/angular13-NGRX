import {routerReducer,RouterReducerState} from '@ngrx/router-store'
import { CurrencyState, LazyState } from "../lazy/state/state";
import { LazyReducer } from "../lazy/state/lazy.reducer";
import { EffectReducer } from "../lazy/state/effect.reducer";

export const appReducer={
    router:routerReducer,
    lazy:LazyReducer,
    effect:EffectReducer,
} 