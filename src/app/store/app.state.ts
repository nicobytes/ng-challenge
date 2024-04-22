import { NewsState } from '@store/news.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
  news: NewsState;
  router: RouterState;
}
