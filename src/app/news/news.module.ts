import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({

  declarations: [
    PageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule
  ]
})
export class NewsModule { }
