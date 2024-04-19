import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, of, throwError } from 'rxjs';
import { SearchResponse, News, GetResponse } from '@models/news.model';
import { environment } from '@env/environment';


@Injectable()
export class NewsService {

  private url = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  public getNews(publishYear?: number): Observable<News[]> {

    const baseQuery = '+contentType:Blog ';
    const finalQuery = publishYear ? baseQuery + `+Blog.postingDate:[${publishYear}-01-01 TO ${publishYear}-12-31]` : baseQuery;
    const path = `${this.url}/content/_search`;
    return this.httpClient.post<SearchResponse>(path, {
      query: finalQuery
    })
      .pipe(
        map(response => response.entity.jsonObjectView.contentlets)
      );
  }

  public getArticle(identifier: string): Observable<News> {
    const path = `${this.url}/content/id/${identifier}`;
    return this.httpClient.get<GetResponse>(path)
    .pipe(
      mergeMap(response => {
        const { contentlets } = response;
        if (contentlets.length > 0) {
          return of(contentlets[0]);
        }
        return throwError(() => new Error(`Not found`));
      })
    );
  }

}
