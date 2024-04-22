import { NewsState } from '@store/states/news.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
  news: NewsState;
  router: RouterState;
}
