import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }
