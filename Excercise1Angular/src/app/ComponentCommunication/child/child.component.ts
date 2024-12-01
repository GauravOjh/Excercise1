import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { item } from '../../Models/Item';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Input()
  items:item[] = [];

  @Output()
  selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectItem(item:any) {
    this.selectedItemEmitter.emit(item);
  }
}
