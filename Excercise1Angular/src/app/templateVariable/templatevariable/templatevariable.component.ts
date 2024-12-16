import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatevariable',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templatevariable.component.html',
  styleUrl: './templatevariable.component.css'
})
export class TemplatevariableComponent  implements OnInit{
@ViewChild('honeheader',{static:true}) Honeheader: ElementRef | any;
@ViewChild('inputdata',{static:true}) inputData: ElementRef | any;
inputlength=0;
vowels = [
  { letter: 'a', count: 0 },
  { letter: 'e', count: 0 },
  { letter: 'i', count: 0 },
  { letter: 'o', count: 0 },
  { letter: 'u', count: 0 },
];
ngOnInit(): void {
  this.Honeheader.nativeElement.innerHTML = 'Analyze color';

}

checklength(word:any){
  this.inputlength = this.inputData.nativeElement.value.length;
  let aCount = 0;
  let eCount = 0;
  let iCount = 0;
  let oCount = 0;
  let uCount = 0;

  for (let letter of word) {
    if (letter === 'a') {
      aCount++;
    }
    if (letter === 'e') {
      eCount++;
    }
    if (letter === 'i') {
      iCount++;
    }
    if (letter === 'o') {
      oCount++;
    }
    if (letter === 'u') {
      uCount++;
    }
  }

  this.vowels = [
    { letter: 'a', count: aCount },
    { letter: 'e', count: eCount },
    { letter: 'i', count: iCount },
    { letter: 'o', count: oCount },
    { letter: 'u', count: uCount },
  ];
}

}
