import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectStateNewsFetching } from '@core/store/news.selectors';
import { map, tap } from 'rxjs';
import { NewsActions } from '@core/store/news.actions';

export const loadGuard: CanActivateFn = route => {
  const store = inject(Store);
  const url = route.paramMap.get('url');
  return store.select(selectStateNewsFetching).pipe(
    tap(state => {
      if (url === null && state === 'init') {
        store.dispatch(NewsActions.loadNewsFecth({}));
      } else if (url !== null && state === 'init') {
        store.dispatch(NewsActions.loadNewsFecth({ articleId: url }));
      } else if (url !== null && state === 'success') {
        store.dispatch(NewsActions.selectArticle({ articleId: url }));
      }
    }),
    map(() => true)
  );
};
