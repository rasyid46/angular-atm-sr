import { Component, OnInit ,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

  
}
