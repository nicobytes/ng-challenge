import { Component, input } from '@angular/core';
import { Paragraph } from '@core/models/news.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dot-paragraph',
  standalone: true,
  imports: [NgClass],
  template: `
    <p [style.text-align]="data().attrs.textAlign">
      @for (content of data().content; track $index) {
        <span [ngClass]="content.classes">{{ content.text }}</span>
      }
    </p>
  `,
})
export class ParagraphComponent {
  data = input.required<Paragraph>();
}
