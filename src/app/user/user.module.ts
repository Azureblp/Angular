import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {  RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule,


     ]
})
export class UserModule { }