import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondcomponent',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './secondcomponent.component.html',
  styleUrl: './secondcomponent.component.css'
})
export class SecondcomponentComponent {
  constructor(private sharedService:SharedService){}
  shape='';
  color='';
  shapeClass= '';

  selectshapeandColor(){
    this.shapeClass = this.sharedService.shape(this.shape,this.color);
  }
}
