import { createActionGroup, props } from '@ngrx/store';
import { News } from '@core/models/news.model';

export const NewsActions = createActionGroup({
  source: 'News',
  events: {
    loadNewsFecth: props<{ year?: string; articleId?: string }>(),
    loadNewsSuccess: props<{ news: News[]; articleId?: string }>(),
    loadNewsFailed: props<{ error: string }>(),
    selectArticle: props<{ articleId: string | null }>(),
  },
});
