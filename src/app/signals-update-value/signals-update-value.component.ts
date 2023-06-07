import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-update-value',
  templateUrl: './signals-update-value.component.html',
  styleUrls: ['./signals-update-value.component.css'],
})
export class SignalsUpdateValueComponent {
  startPrice = signal<number>(10);

  updatePrice() {
    this.startPrice.update((price) => price + 30);
  }
}
