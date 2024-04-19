import { createActionGroup, props } from '@ngrx/store';
import { News } from '@core/models/news.model';

export const NewsActions = createActionGroup({
  source: 'News',
  events: {
    'Load Articles': props<{ news: News[] }>(),
    'Select Article': props<{ articleId: string | null }>(),
  },
});