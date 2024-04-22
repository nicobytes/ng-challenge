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

### 1. Fork and Clone repo

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com:nicobytes/ng-challenge.git
```

### 2. Install dependencies

```
npm i
```

### 3. Run app locally

```
npm run start
```


## Functionalities

### Dynamic Content Loading

The application automatically fetches and displays the latest blog news sorted by publish date in descending order.

![capture](/images/engine.jpg)

### Error Handling

### Default Selection and Navigation

### Angular Routing

### Advanced Styling with SASS/LESS

### Content Filtering by Year

### Unit Testing

### Code Quality

### Responsive Two-Column Layout

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
│   │   └── services
│   │       ├── meta.service.spec.ts
│   │       ├── meta.service.ts
│   │       ├── news.service.ts
│   │       └── ui.service.ts
│   ├── news
│   │   ├── components
│   │   │   ├── article
│   │   │   │   ├── article.component.html
│   │   │   │   └── article.component.ts
│   │   │   ├── aside
│   │   │   │   ├── aside.component.html
│   │   │   │   ├── aside.component.scss
│   │   │   │   └── aside.component.ts
│   │   │   ├── dot-content
│   │   │   │   ├── dot-content.component.html
│   │   │   │   └── dot-content.component.ts
│   │   │   ├── header
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   ├── heading
│   │   │   │   └── heading.component.ts
│   │   │   ├── image
│   │   │   │   └── image.component.ts
│   │   │   └── paragraph
│   │   │       └── paragraph.component.ts
│   │   ├── layout
│   │   │   ├── layout.component.html
│   │   │   ├── layout.component.scss
│   │   │   └── layout.component.ts
│   │   ├── news.routes.ts
│   │   ├── pages
│   │   │   └── home
│   │   │       ├── home.component.html
│   │   │       ├── home.component.scss
│   │   │       └── home.component.ts
│   │   └── pipes
│   │       ├── time-ago.pipe.ts
│   │       ├── truncate.pipe.spec.ts
│   │       └── truncate.pipe.ts
│   └── store
│       ├── actions
│       │   ├── news-ui.actions.ts
│       │   └── news.actions.ts
│       ├── effects
│       │   └── news.effect.ts
│       ├── reducers
│       │   ├── index.ts
│       │   ├── news-ui.reducer.ts
│       │   └── news.reducer.ts
│       ├── selectors
│       │   ├── news.selectors.ts
│       │   └── router.selectors.ts
│       └── states
│           ├── app.state.ts
│           ├── news-ui.state.ts
│           └── news.state.ts
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
