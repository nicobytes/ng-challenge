import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@news/components/header/header.component';
import { NewsService } from '@core/services/news.service';
import { News } from '@core/models/news.model';
import { UiService } from '@core/services/ui.service';
import { TruncatePipe } from '@news/pipes/truncate.pipe';

@Component({
  selector: 'dot-aside',
  standalone: true,
  imports: [HeaderComponent, TruncatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  private newsService = inject(NewsService);
  private uiService = inject(UiService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  public articles = signal<News[]>([]);
  public showNewsOnMobile = this.uiService.showNewsOnMobile;

  public constructor() {
    this.activatedRoute.queryParams.subscribe(params => {
      const { year } = params;
      this.loadNews(year);
    });
  }

  loadNews(year?: string) {
    this.newsService.getNews(year).subscribe(news => {
      this.articles.set(news);
      if (news.length > 0) {
        const article = news[0];
        this.router.navigate(['/', article.identifier], {
          queryParams: { year },
        });
      }
    });
  }
}
