import { Component, input } from '@angular/core';
import { Heading } from '@core/models/news.model';

@Component({
  selector: 'dot-heading',
  standalone: true,
  imports: [],
  template: `
    @switch (data().attrs.level) {
      @case (1) {
        @for (content of data().content; track $index) {
          <h1>{{ content.text }}</h1>
        }
      }
      @case (2) {
        @for (content of data().content; track $index) {
          <h2>{{ content.text }}</h2>
        }
      }
      @case (3) {
        @for (content of data().content; track $index) {
          <h3>{{ content.text }}</h3>
        }
      }
    }
  `,
})
export class HeadingComponent {
  data = input.required<Heading>();
}
