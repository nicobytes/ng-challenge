import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UiService } from '@core/services/ui.service';

@Component({
  selector: 'dot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class HeaderComponent {
  private uiService = inject(UiService);
  private router = inject(Router);
  public showNewsOnMobile = this.uiService.showNewsOnMobile;
  public selectOptions = signal(this.getLastestYears());
  public yearControl = new FormControl('', { nonNullable: true });

  constructor() {
    this.yearControl.valueChanges.subscribe(year => {
      this.router.navigate(['/'], { queryParams: { year } });
      this.uiService.openMenu();
    });
  }

  public toggleMobileShow() {
    this.uiService.toggleMobileShow();
  }

  getLastestYears() {
    const year = new Date().getFullYear();
    const years = [];
    for (let i = 1; i <= 5; i++) {
      years.push(year - i);
    }
    return years;
  }
}
