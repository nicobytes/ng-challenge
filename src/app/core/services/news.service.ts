import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { News } from '../../types';


@Injectable()
export class NewsService {
  constructor(private httpClient: HttpClient) { }

  public getNews(publishYear?: number): Observable<News[]> {
    const baseQuery = '+contentType:Blog '
    const finalQuery = publishYear ? baseQuery + `+Blog.postingDate:[${publishYear}-01-01 TO ${publishYear}-12-31]` : baseQuery;
    return this.httpClient.post< {
    entity: {
      jsonObjectView: {
        contentlets: News[]
      }
    }
  }>(`https://demo.dotcms.com/api/content/_search`, {
      query: finalQuery
    })
      .pipe(
        map(response => response.entity.jsonObjectView.contentlets)
      );
  }

  public getArticle(identifier: string): Observable<News | undefined> {
    return this.getNews()
      .pipe(
        map(news => news.find(article => article.identifier === identifier)),
        map(article => {
          return {
            ...article,
            paragraphs: this.getValuesByKey(article, 'text')
          } as News
        })
      );
  }

  private getValuesByKey(obj: any, key: string): string[] {
    let values = [];


    if (obj?.hasOwnProperty(key)) {
      values.push(obj[key]);
    }


    for (let prop in obj) {
      if (typeof obj[prop] === 'object') {

        values = values.concat(this.getValuesByKey(obj[prop], key));
      }
    }

    return values;
  }

}
