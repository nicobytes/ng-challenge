import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showNewsOnMobile = signal(false);

  public toggleMobileShow() {
    this.showNewsOnMobile.update(prevState => !prevState);
  }

  openMenu() {
    this.showNewsOnMobile.set(true);
  }
}
