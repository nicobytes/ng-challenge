import { Component, effect, inject, input, signal } from '@angular/core';
import { HeaderComponent } from '@news/components/header/header.component';
import { AsideComponent } from '@news/components/aside/aside.component';
import { ArticleComponent } from '@news/components/article/article.component';
import { NewsService } from '@core/services/news.service';
import { News } from '@core/models/news.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'dot-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AsideComponent,
    NgOptimizedImage,
    ArticleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  private newsService = inject(NewsService);

  identifier = input<string>();
  article = signal<News | null>(null);

  constructor() {
    effect(() => {
      const identifier = this.identifier();
      if (identifier) {
        this.getArticle(identifier);
      }
    });
  }

  getArticle(identifier: string) {
    this.newsService.getArticle(identifier).subscribe(content => {
      this.article.set(content);
    });
  }
}
