import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-secondcomponent',
  standalone: true,
  imports: [],
  templateUrl: './secondcomponent.component.html',
  styleUrl: './secondcomponent.component.css'
})
export class SecondcomponentComponent {
  constructor(private sharedService:SharedService){}
  shape='';
  color='';
  shapeClass= '';
  selectColor(color:any){
    this.color= color.target.value;
  }
  selectShape(shape:any){
    this.shape = shape.target.value;
  }

  selectshapeandColor(){
    this.shapeClass = this.sharedService.shape(this.shape,this.color);
  }
}
