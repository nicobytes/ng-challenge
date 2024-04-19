import { Component, input } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { News } from '@core/models/news.model';
import { ParagraphComponent } from '@news/components/paragraph/paragraph.component';
import { HeadingComponent } from '@news/components/heading/heading.component';
import { ImageComponent } from '@news/components/image/image.component';

@Component({
  selector: 'dot-article',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    ParagraphComponent,
    HeadingComponent,
    ImageComponent,
  ],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  content = input.required<News['blogContent']>();
}
