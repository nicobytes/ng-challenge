import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { NewsActions } from '@store/news.actions';
import { NewsService } from '@core/services/news.service';

@Injectable()
export class NewsEffects {
  private newsService = inject(NewsService);
  private actions$ = inject(Actions);

  loadArticlesUI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.loadNewsFecth),
      exhaustMap(action =>
        this.newsService.getNews(action.year).pipe(
          map(news =>
            NewsActions.loadNewsSuccess({ news, articleId: action.articleId })
          ),
          catchError(error => of(NewsActions.loadNewsFailed({ error })))
        )
      )
    );
  });

  loadArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.loadNewsSuccess),
      switchMap(action => {
        let articleId = action.articleId ?? null;
        if (action.news.length > 0 && articleId === null) {
          articleId = action.news[0].urlTitle;
        }
        return of(NewsActions.selectArticle({ articleId }));
      })
    );
  });
}
