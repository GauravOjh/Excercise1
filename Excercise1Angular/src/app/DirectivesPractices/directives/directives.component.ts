import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isclearDisabled = false;
  chooseNum = 1;
  numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  calculate(num:any){
    this.chooseNum = num;
    if(num===1){
      this.isclearDisabled=true;
    }
    else{
      this.isclearDisabled=false;
    }
  }

}
