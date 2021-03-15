import { HomePageComponent } from './home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post/post.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'post/:slug', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
