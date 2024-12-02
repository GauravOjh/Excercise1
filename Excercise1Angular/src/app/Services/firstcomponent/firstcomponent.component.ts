import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { SecondcomponentComponent } from "../secondcomponent/secondcomponent.component";

@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [SecondcomponentComponent],
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {
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
