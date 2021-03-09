import { IvyCarouselModule } from './ivy-carousel-pro/carousel.module';
import { TruncateText } from './pipes/truncate-text.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [NavbarComponent, CarouselComponent, TruncateText],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    TruncateText,
  ]
})
export class SharedModule { }
