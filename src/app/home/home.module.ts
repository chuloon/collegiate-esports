import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class HomeModule { }
