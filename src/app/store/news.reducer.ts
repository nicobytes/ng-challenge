import { createReducer, on } from '@ngrx/store';
import { NewsState, NewsAdapter } from '@store/news.state';
import { NewsActions } from '@store/news.actions';

export const initialState: NewsState = NewsAdapter.getInitialState({
  selectedArticleId: null,
  stateNewsFetching: {
    status: 'init',
    error: null,
  },
});

export const NewsReducer = createReducer(
  initialState,
  on(NewsActions.selectArticle, (state, { articleId }): NewsState => {
    return {
      ...state,
      selectedArticleId: articleId,
    };
  }),
  on(NewsActions.loadNewsFecth, (state): NewsState => {
    return {
      ...state,
      stateNewsFetching: {
        status: 'loading',
        error: null,
      },
    };
  }),
  on(NewsActions.loadNewsSuccess, (state, { news }): NewsState => {
    return NewsAdapter.setAll(news, {
      ...state,
      stateNewsFetching: {
        status: 'success',
        error: null,
      },
    });
  }),
  on(NewsActions.loadNewsFailed, (state, action): NewsState => {
    return {
      ...state,
      stateNewsFetching: {
        status: 'error',
        error: action.error,
      },
    };
  })
);
