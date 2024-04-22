import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '@core/store/app.state';

import { NewsReducer } from './news.reducer';

export const reducers: ActionReducerMap<AppState> = {
  news: NewsReducer,
  router: routerReducer,
};
