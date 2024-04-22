import { createActionGroup, props } from '@ngrx/store';

export const NewsUIActions = createActionGroup({
  source: 'News UI',
  events: {
    'Load Articles': props<{ year?: string; articleId?: string }>(),
    'Error fetching': props<{ error: string }>(),
  },
});
