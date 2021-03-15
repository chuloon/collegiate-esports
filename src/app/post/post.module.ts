import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { IconModule, IconSetModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    IconModule,
    IconSetModule.forRoot(),
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
