import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [HomePageComponent, NewsfeedComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
