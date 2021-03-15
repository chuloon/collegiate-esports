import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from './ivy-carousel-pro/carousel.module';
import { TruncateText } from './pipes/truncate-text.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { IconModule, IconSetModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [NavbarComponent, CarouselComponent, TruncateText, NewsfeedComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    IconModule,
    IconSetModule.forRoot(),
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    TruncateText,
    NewsfeedComponent
  ]
})
export class SharedModule { }
