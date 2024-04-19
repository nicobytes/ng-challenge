import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState, NewsAdapter } from '@store/states/news.state';
import { selectRouteParam } from '@store/selectors/router.selectors';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const {
  selectAll: selectAllArticles,
  selectTotal: selectCountAllArticles,
  selectEntities: selectEntitiesArticles,
  selectIds: selectArticlesIds,
} = NewsAdapter.getSelectors(selectNewsState);

export const selectArticleId = createSelector(
  selectNewsState,
  state => state.selectedArticleId
);

export const selectArticle = createSelector(
  selectRouteParam('url'),
  selectEntitiesArticles,
  selectArticlesIds,
  (url, entities, ids) => {
    if (url) {
      return entities[url];
    }
    if (ids.length > 0) {
      return entities[ids[0]];
    }
    return null;
  }
);
