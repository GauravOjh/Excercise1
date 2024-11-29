import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 header="Data Binding";
 system = "Subscribe";
 isDisabled = false;
 inputData="";
 checkform(){
   if(this.system==this.inputData){
     this.isDisabled = true;
   }
 }
 inputManipulation(event:any){
  if(event.target.value.length === 0){
    this.isDisabled = false;
  }
 }
}
