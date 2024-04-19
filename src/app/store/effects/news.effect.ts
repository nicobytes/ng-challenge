import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NewsUIActions } from '@store/actions/news-ui.actions';
import { NewsActions } from '@store/actions/news.actions';
import { NewsService } from '@core/services/news.service';

@Injectable()
export class NewsEffects {
  private newsService = inject(NewsService);
  private actions$ = inject(Actions);

  loadArticles = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsUIActions.loadArticles),
      exhaustMap(() =>
        this.newsService.getNews().pipe(
          map(news => NewsActions.loadArticles({ news })),
          catchError(error => of(NewsUIActions.errorFetching({ error })))
        )
      )
    );
  });
}
