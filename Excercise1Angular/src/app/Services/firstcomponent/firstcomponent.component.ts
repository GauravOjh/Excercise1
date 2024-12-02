import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { SecondcomponentComponent } from "../secondcomponent/secondcomponent.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [SecondcomponentComponent,FormsModule,CommonModule],
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {
  constructor(private sharedService:SharedService){}
  shape='';
  color='';
  shapeClass= '';

  selectshapeandColor(){
    this.shapeClass = this.sharedService.shape(this.shape,this.color);
  }
}
