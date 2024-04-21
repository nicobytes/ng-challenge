import { Component, input } from '@angular/core';
import { DotImage } from '@core/models/news.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'dot-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <picture class="image">
      @if (data().attrs.src) {
        <img fill [ngSrc]="data().attrs.src" [alt]="data().attrs.title" />
      } @else {
        <img
          fill
          [ngSrc]="data().attrs.data.asset"
          [alt]="data().attrs.data.titleImage" />
      }
    </picture>
  `,
})
export class ImageComponent {
  data = input.required<DotImage>();
}
