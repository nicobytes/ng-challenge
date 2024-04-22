![capture](/images/cover.jpg)

# dotCMS Reader Challenge

Reader App is a front-end app built with Angular with SSR and deployed in Cloudfare Pages.

# Table of Contents  
- [Services](#services)  
- [Quickstart](#quickstart)
- [Functionalities](#functionalities)
- [Deployment](#Deployment)
- [Folder structure](#folder-structure)

## Services

- API: https://www.dotcms.com/docs/latest/content-api-retrieval-and-querying
- Frontend: https://interview.nicobytes.com/


## Quickstart

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com:nicobytes/ng-challenge.git
```

Install dependencies

```
npm i
```

Run app locally

```
npm run start
```


## Functionalities

### Dynamic Content Loading

The application automatically fetches and displays the latest blog news sorted by publish date in descending order.

![capture](/images/engine.jpg)

### Error Handling

By default, if the endpoint getting news `/_search` does not respond with a well-formatted response, the service returns an empty array.

```ts

export class NewsService {
  ...
  public getNews(publishYear?: string): Observable<News[]> {
    const baseQuery = '+contentType:Blog ';
    const finalQuery = publishYear
      ? baseQuery +
        `+Blog.postingDate:[${publishYear}-01-01 TO ${publishYear}-12-31]`
      : baseQuery;
    const path = `${this.url}/content/_search`;
    return this.httpClient
      .post<SearchResponse>(path, {
        query: `${finalQuery}`,
      })
      .pipe(
        map(response => {
          if (response?.entity?.jsonObjectView?.contentlets) {
            return response.entity.jsonObjectView.contentlets.map(item =>
              this.formatNew(item)
            );
          }
          return [];
        })
      );
  }
}
```

And if something is wrong with that request, there are implications for handling that behavior with an effect.

```ts
export class NewsEffects {
  ...

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
}
```

### Default Selection and Navigation

If the app starts with the empty path like this: `https://reader.nicobytes.com/`, the application will load news and select the first new one by default.

![capture](/images/default_route.jpg)

If you start the application with a query parameter to filter by year, like this `https://reader.nicobytes.com/?year=2019`, the application will load news with this filter and select the first one by default.

![capture](/images/default_query.jpg)

Finally, if you start with a specific new URL, the app will load the news and select the right new one.

![capture](/images/default_url.jpg)

### Angular Routing

The application handles these main routes:

- https://reader.nicobytes.com/
- https://reader.nicobytes.com/?year={year}
- https://reader.nicobytes.com/:url

All these routes are shareable with SSR support using `@angular/ssr` package and Cloudfare Pages as a server.

![capture](/images/ssr.jpg)

And with the `MetaService`, the app dynamically create an open graph to generate previews in social media applications.

![capture](/images/shareble.jpg)

### Advanced Styling with SASS/LESS

The application handles SASS, CSS variables, and BEM conventions to create the application style.

### Responsive Two-Column Layout

The app has a two-column design for desktop.

![capture](/images/desktop.jpg)

In mobile, there is one column and a button in the header to handle the menu news.

![capture](/images/mobile.jpg)

### Content Filtering by Year

There is a query param to filter the news by year: `https://reader.nicobytes.com/?year={year}`. It includes SSR and reactive forms.

```ts
this.yearControl.valueChanges.subscribe(year => {
  this.router.navigate(['/'], { queryParams: { year } });
  this.uiService.openMenu();
});
```

### Image Processing

### Code Quality

- Redux Pattern: Handle Ngrx to implement redux pattern in Angular the components has not a lot of busness logic the majory compoantes just have a subcriptio to the store and send actions to create behaviors.
- Linter & Format: The include the Angular Linter with ESLint in stric mode to ensure good practices and Prettier for the format. The Linter process is checking automatuclly for GitActions.
- Enviroments files:
- Node 20
- Angulae v17
- Migrate to standalone components
- App withoud modules
- Signals
- Use short imports
- Application builder
- Use inject function

### Seo friendly titles

Refactor getArticle in service and get new directly by API

## Deployment

With Github actions to detect changes in the code and deploy the app to the cloud. As part of CI/CD, the project has a linter and build step before deploying the app. The project has automatic deployment to Cloudflare pages.

![capture](/images/interview_ci.jpg)


## Folder structure

The frontend app is organized in the following folder structure:

```sh
.
├── _routes.json
├── app
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core
│   │   ├── models
│   │   │   └── news.model.ts
│   │   ├── services
│   │   │   ├── meta.service.spec.ts
│   │   │   ├── meta.service.ts
│   │   │   ├── news.service.ts
│   │   │   └── ui.service.ts
│   │   └── store
│   │       ├── app.state.ts
│   │       ├── index.ts
│   │       ├── news.actions.ts
│   │       ├── news.effect.ts
│   │       ├── news.reducer.ts
│   │       ├── news.selectors.ts
│   │       └── news.state.ts
│   └── news
│       ├── components
│       │   ├── article
│       │   │   ├── article.component.html
│       │   │   └── article.component.ts
│       │   ├── aside
│       │   │   ├── aside.component.html
│       │   │   ├── aside.component.scss
│       │   │   └── aside.component.ts
│       │   ├── dot-content
│       │   │   ├── dot-content.component.html
│       │   │   └── dot-content.component.ts
│       │   ├── header
│       │   │   ├── header.component.html
│       │   │   ├── header.component.scss
│       │   │   └── header.component.ts
│       │   ├── heading
│       │   │   └── heading.component.ts
│       │   ├── image
│       │   │   └── image.component.ts
│       │   └── paragraph
│       │       └── paragraph.component.ts
│       ├── guard
│       │   ├── load.guard.spec.ts
│       │   └── load.guard.ts
│       ├── layout
│       │   ├── layout.component.html
│       │   ├── layout.component.scss
│       │   └── layout.component.ts
│       ├── news.routes.ts
│       ├── pages
│       │   └── home
│       │       ├── home.component.html
│       │       ├── home.component.scss
│       │       └── home.component.ts
│       └── pipes
│           ├── time-ago.pipe.ts
│           ├── truncate.pipe.spec.ts
│           └── truncate.pipe.ts
├── assets
├── environments
│   ├── environment.development.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.server.ts
├── main.ts
├── robots.txt
└── styles.scss
```


# NewsReader

- [ ] Create enviroments files
- [ ] Add linter
- [ ] Add CI/CD to deployment in Cloudfare Pages
- [ ] Add CI/CD to check linter
- [ ] Add Angular linter
- [ ] Upgrade to Node 20
- [ ] Upgrande to Angular v17
- [ ] Avoid any type
- [ ] Migrate to standalone components
- [ ] Migrate to Angular apps without modules
- [ ] Use signals
- [ ] Use short imports
- [ ] Refactor getArticle in service and get new directly by API
- [ ] Create basic type sytem
- [ ] Use query params
- [ ] Seo friendly titles
- [ ] Engine to render content
- [ ] Use inject function
- [ ] Application builder
- [ ] Separate header component
- [ ] Year selector as FormControl
- [ ] Use prettier
- [ ] Load the years based in the current year
- [ ] Use withComponentInputBinding
- [ ] Create truncate pipe
- [ ] Use custom loading NgSrc
- [ ] Sjeloton
- [ ] OpenGrap
