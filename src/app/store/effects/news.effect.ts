import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { NewsUIActions } from '@store/actions/news-ui.actions';
import { NewsActions } from '@store/actions/news.actions';
import { NewsService } from '@core/services/news.service';

@Injectable()
export class NewsEffects {
  private newsService = inject(NewsService);
  private actions$ = inject(Actions);
  private router = inject(Router);

  loadArticlesUI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsUIActions.loadArticles),
      exhaustMap(action =>
        this.newsService.getNews(action.year).pipe(
          map(news => NewsActions.loadArticles({ news })),
          catchError(error => of(NewsUIActions.errorFetching({ error })))
        )
      )
    );
  });

  loadArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.loadArticles),
      switchMap(action => {
        let articleId = null;
        if (action.news.length > 0) {
          articleId = action.news[0].urlTitle;
        }
        return of(NewsActions.selectArticle({ articleId }));
      })
    );
  });
}
