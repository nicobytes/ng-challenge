import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '@store/states/app.state';

import { NewsReducer } from './news.reducer';
import { UIReducer } from './news-ui.reducer';

export const reducers: ActionReducerMap<AppState> = {
  news: NewsReducer,
  ui: UIReducer,
  router: routerReducer,
};
