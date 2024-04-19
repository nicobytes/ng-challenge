import { AfterViewInit, Component, inject } from '@angular/core';
import { NewsService } from '@core/services/news.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { News } from '@core/models/news.model';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'dot-layout',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgClass, NgIf]
})
export default class PageComponent implements AfterViewInit {

  public selectOptions = [2019, 2020, 2021, 2022, 2023];
  public formGroup: FormGroup;
  public yearControl: FormControl;
  public news$: Observable<News[]>;
  public showNewsOnMobile = false;
  public readonly apiUrl = 'https://demo.dotcms.com/';
  navMenu: News[] = [];

  public article!: News;
  private newsService = inject(NewsService);
  private formBuilder = inject(FormBuilder);


  public constructor() {
    this.formGroup = this.formBuilder.group({
      year: this.selectOptions[0]
    })
    this.yearControl = this.formGroup.controls['year'] as FormControl;
    this.news$ = this.yearControl.valueChanges.pipe(
      switchMap(year => {
        return this.newsService.getNews(year).pipe(
          tap((news) => {
            this.newsService.getArticle(news[0]?.identifier).subscribe((article) => {
              this.article = article ? article : {} as News;
            });
          })
        )
      })
    );

  }


  public ngAfterViewInit() {
    this.news$.subscribe((news) => {
      this.navMenu = news;
    });

    this.yearControl.updateValueAndValidity({ emitEvent: true });


  }

  public toggleMobileShow() {
    this.showNewsOnMobile = !this.showNewsOnMobile;
  }

  shortenText(text: string): string {
    const limit = 50;
    if (text.length > limit) {
      return text.slice(0, limit) + '...';
    } else {
      return text;
    }
  }

  showArticle(identifier: string) {
    this.newsService.getArticle(identifier).subscribe((article) => {
      this.article = article ? article : {} as News;
    });
  }
}
