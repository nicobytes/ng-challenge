import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DotContent } from '@core/models/news.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'dot-content',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe],
  template: `
    @if (data(); as data) {
      <div class="dot-content">
        <picture class="image">
          @if (data.attrs.data.imageVersion) {
            <img
              fill
              [ngSrc]="data.attrs.data.imageVersion"
              [alt]="data.attrs.data.title" />
          }
        </picture>
        <div class="info">
          <h3>{{ data.attrs.data.title }}</h3>
          <div class="text-xs" [innerHTML]="data.attrs.data.description"></div>
          <div class="price">
            <p class="text-xs">{{ data.attrs.data.retailPrice | currency }}</p>
            <a href="https://demo.dotcms.com/store/products/" class="btn"
              >Buy</a
            >
          </div>
        </div>
      </div>
    }
  `,
})
export class DotContentComponent {
  data = input.required<DotContent>();
}
