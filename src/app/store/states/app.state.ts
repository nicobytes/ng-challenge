import { NewsState } from '@store/states/news.state';
import { RouterState } from '@ngrx/router-store';
import { NewsUIState } from '@store/states/news-ui.state';

export interface AppState {
  news: NewsState;
  ui: NewsUIState;
  router: RouterState;
}
