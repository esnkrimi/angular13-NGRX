import { createAction, props } from "@ngrx/store";

export const lazyAction=createAction('[lazy] lazyAction',props<{l:any}>());
export const effectAction=createAction('[lazy] effectAction',props<{m:any,b:any}>());

 