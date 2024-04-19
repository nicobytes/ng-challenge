import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsUIActions } from '@store/actions/news-ui.actions';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@news/components/header/header.component';
import { AsideComponent } from '@news/components/aside/aside.component';

@Component({
  selector: 'dot-layout',
  standalone: true,
  imports: [HeaderComponent, AsideComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.dispatch(NewsUIActions.loadArticles());
  }
}
