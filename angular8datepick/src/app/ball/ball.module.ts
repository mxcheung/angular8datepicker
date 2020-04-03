import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [BallComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [
    BallComponent
  ],
})
export class BallModule { }
