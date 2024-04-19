import { createReducer, on } from '@ngrx/store';
import { NewsUIState } from '@store/states/news-ui.state';
import { NewsUIActions } from '@store/actions/news-ui.actions';

export const initialState: NewsUIState = {
  stateNews: {
    status: 'init',
    error: null,
  },
};

export const UIReducer = createReducer(
  initialState,
  on(NewsUIActions.loadArticles, (state): NewsUIState => {
    return {
      ...state,
      stateNews: {
        status: 'loading',
        error: null,
      },
    };
  })
);
