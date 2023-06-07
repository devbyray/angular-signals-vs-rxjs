import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-set-value',
  templateUrl: './signals-set-value.component.html',
  styleUrls: ['./signals-set-value.component.css'],
})
export class SignalsSetValueComponent {
  price = signal<number>(10);

  setNewPrice() {
    this.price.set(30);
  }
}
