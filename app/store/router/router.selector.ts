import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "./costum.serializer";

export const getRouterState=createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
export const getCurrent=createSelector(getRouterState,(router)=>{
    return router.state;
})