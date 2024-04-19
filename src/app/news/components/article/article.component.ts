import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { News } from '@core/models/news.model';

@Component({
  selector: 'dot-article',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  content = input.required<News['blogContent']>();
}
