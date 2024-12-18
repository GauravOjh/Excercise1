import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { item } from '../../Models/Item';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  filterByType = '';
  filteredItems:item[] = [];
  items:item[] = [
    { name: 'Green', type: 'color' },
    { name: 'Dog', type: 'animal' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Yellow', type: 'color' },
    { name: 'Cat', type: 'animal' },
    { name: 'Blue', type: 'color' },
    { name: 'Red', type: 'color' },
    { name: 'Cow', type: 'animal' },
    { name: 'Goat', type: 'animal' },
    { name: 'Black', type: 'color' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Cherry', type: 'fruit' },
  ];
  selectedItem: any;

  ngOnInit(){
    this.filteredItems = [...this.items];
  }

 onbuttonClick(type:any){
    this.filteredItems = [...this.items.filter((x)=>x.type===type)];
 }

 selectItem(item:any){
  this.selectedItem = item;
 }
}
