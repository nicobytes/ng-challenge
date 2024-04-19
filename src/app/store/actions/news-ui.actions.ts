import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const NewsUIActions = createActionGroup({
  source: 'News UI',
  events: {
    'Load Articles': emptyProps(),
    'Error fetching': props<{ error: string }>(),
  },
});
