import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  selectAllArticles,
  selectArticleId,
} from '@store/selectors/news.selectors';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@news/components/header/header.component';
import { TruncatePipe } from '@news/pipes/truncate.pipe';
import { TimeAgoPipe } from '@news/pipes/time-ago.pipe';
import { Store } from '@ngrx/store';
import { UiService } from '@core/services/ui.service';

@Component({
  selector: 'dot-aside',
  standalone: true,
  imports: [
    HeaderComponent,
    TruncatePipe,
    RouterLink,
    NgOptimizedImage,
    TimeAgoPipe,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  private store = inject(Store);
  private uiService = inject(UiService);
  public showNewsOnMobile = this.uiService.showNewsOnMobile;
  public articles = this.store.selectSignal(selectAllArticles);
  public selectArticleId = this.store.selectSignal(selectArticleId);

  public toggleMobileShow() {
    this.uiService.toggleMobileShow();
  }
}
