import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { News } from '@core/models/news.model';

export interface NewsState extends EntityState<News> {
  selectedArticleId: string | null;
  stateNewsFetching: {
    status: 'loading' | 'success' | 'error' | 'init';
    error: string | null;
  };
}

export const NewsAdapter: EntityAdapter<News> = createEntityAdapter<News>({
  selectId: entity => entity.urlTitle,
});
