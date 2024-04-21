import { createReducer, on } from '@ngrx/store';
import { NewsState, NewsAdapter } from '@store/states/news.state';
import { NewsActions } from '@store/actions/news.actions';

export const initialState: NewsState = NewsAdapter.getInitialState({
  selectedArticleId: null,
});

export const NewsReducer = createReducer(
  initialState,
  on(NewsActions.loadArticles, (state, { news }) => {
    return NewsAdapter.setAll(news, { ...state });
  }),
  on(NewsActions.selectArticle, (state, { articleId }): NewsState => {
    return {
      ...state,
      selectedArticleId: articleId,
    };
  })
);
