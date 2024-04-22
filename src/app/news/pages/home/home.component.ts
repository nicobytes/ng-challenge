import { Component, effect, inject } from '@angular/core';
import { HeaderComponent } from '@news/components/header/header.component';
import { AsideComponent } from '@news/components/aside/aside.component';
import { ArticleComponent } from '@news/components/article/article.component';
import { TimeAgoPipe } from '@news/pipes/time-ago.pipe';
import { selectArticle } from '@store/selectors/news.selectors';
import { NgOptimizedImage } from '@angular/common';
import { Store } from '@ngrx/store';
import { MetaService } from '@core/services/meta.service';

@Component({
  selector: 'dot-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AsideComponent,
    NgOptimizedImage,
    ArticleComponent,
    TimeAgoPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  private store = inject(Store);
  private metaTagsService = inject(MetaService);
  public article = this.store.selectSignal(selectArticle);

  constructor() {
    effect(() => {
      const article = this.article();
      this.metaTagsService.updateMetadata({
        title: article?.title,
        image: article?.image,
        description: article?.teaser,
      });
    });
  }
}
