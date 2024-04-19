import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'dot-root',
    template: '<router-outlet />',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
}
