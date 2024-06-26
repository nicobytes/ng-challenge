import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsActions } from '@core/store/news.actions';
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
    this.activatedRoute.queryParamMap
      .pipe(
        map(params => params.get('year') ?? undefined),
        filter(year => year !== undefined)
      )
      .subscribe(year => {
        this.store.dispatch(NewsActions.loadNewsFecth({ year }));
      });
  }
}
