import { Component, OnInit,Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  @Input() stock:number;
  @Input() productId:number;
  @Input() sule:any;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue:number;

  constructor() { }

  ngOnInit() {
  }
  
  stockValueChanged() {
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue , sule : this.sule });
    // this.updatedstockvalue = null;
    // this.stock = this.updatedstockvalue;
    this.ngOnchanges();
}

 

   ngOnchanges(){
      if(this.stock > 10 ){
        this.color = 'green';
      }else{
        this.color ='red';
      }
   }


}
