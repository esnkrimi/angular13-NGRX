import { createReducer, on } from "@ngrx/store";
import { effectAction, lazyAction } from "./actions";
import { initialState } from "./state";
const _LazyReducer=createReducer(
    initialState,
    on(lazyAction,(state,action)=>{
        return {
            ...state,
            l:action.l
        }
    }) 
)
export function LazyReducer(state,action){
    return _LazyReducer(state,action)
}
