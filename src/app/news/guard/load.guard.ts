import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCountAllArticles } from '@store/selectors/news.selectors';
import { map, tap } from 'rxjs';
import { NewsActions } from '@store/actions/news.actions';
import { NewsUIActions } from '@store/actions/news-ui.actions';

export const loadGuard: CanActivateFn = route => {
  const store = inject(Store);
  const url = route.paramMap.get('url');
  return store.select(selectCountAllArticles).pipe(
    tap(count => {
      if (url === null && count === 0) {
        store.dispatch(NewsUIActions.loadArticles({}));
      }
      if (url !== null && count === 0) {
        store.dispatch(NewsUIActions.loadArticles({ articleId: url }));
      }
      if (url !== null && count > 0) {
        store.dispatch(NewsActions.selectArticle({ articleId: url }));
      }
    }),
    map(() => true)
  );
};
