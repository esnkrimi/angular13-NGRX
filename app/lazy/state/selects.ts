import { createSelector, createFeatureSelector, props } from '@ngrx/store'
import { RouterStateUrl } from '../../store/router/costum.serializer'
import { getCurrent } from '../../store/router/router.selector'
import { CurrencyState } from './state'

export const selectLazy = createSelector(
  createFeatureSelector('lazy'),
  //من به ردیوثر لیزی وصل میشم
  (x) => {
    return x // کل حوضچه لیزی است
  },
) 
export const selectEffect = createSelector(
  createFeatureSelector('effect'),
  //من به ردیوثر لیزی وصل میشم
  (x) => {
    return x // کل حوضچه لیزی است
  },
) 