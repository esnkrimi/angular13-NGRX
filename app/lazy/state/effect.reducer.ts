import { createReducer, on } from "@ngrx/store";
import { effectAction } from "./actions"; 
import { CurrencyinitialState } from "./state";
const _CurrencyReducer=createReducer(
    CurrencyinitialState,
    on(effectAction,(state,action)=>{
        return {
            ...state,
            price:action['m'][String(action.b).toUpperCase()]['USD']
        }
    })
)
export function EffectReducer(state,action){
    return _CurrencyReducer(state,action)
} 