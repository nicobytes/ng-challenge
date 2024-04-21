import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsUIActions } from '@store/actions/news-ui.actions';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '@news/components/header/header.component';
import { AsideComponent } from '@news/components/aside/aside.component';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'dot-layout',
  standalone: true,
  imports: [HeaderComponent, AsideComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private store = inject(Store);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.store.dispatch(NewsUIActions.loadArticles({}));
    this.activatedRoute.queryParamMap
      .pipe(
        map(params => params.get('year') ?? undefined),
        filter(year => year !== undefined)
      )
      .subscribe(year => {
        this.store.dispatch(NewsUIActions.loadArticles({ year }));
      });
  }
}
