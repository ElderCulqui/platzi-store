import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from '@angular/core';

  import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addCart() {
    console.log('Agregar al carrito');
    this.productClicked.emit(this.product.id);
  }
}
