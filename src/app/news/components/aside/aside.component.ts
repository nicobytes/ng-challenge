import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { selectAllArticles } from '@store/selectors/news.selectors';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '@news/components/header/header.component';
import { TruncatePipe } from '@news/pipes/truncate.pipe';
import { TimeAgoPipe } from '@news/pipes/time-ago.pipe';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dot-aside',
  standalone: true,
  imports: [
    HeaderComponent,
    TruncatePipe,
    RouterLink,
    NgOptimizedImage,
    TimeAgoPipe,
    RouterLinkActive,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  private store = inject(Store);
  public showNewsOnMobile = signal(false);
  public articles = this.store.selectSignal(selectAllArticles);
}
