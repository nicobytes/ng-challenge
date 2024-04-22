import { NewsState } from '@core/store/news.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
  news: NewsState;
  router: RouterState;
}
