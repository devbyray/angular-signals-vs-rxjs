import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-get-updates',
  templateUrl: './signals-get-updates.component.html',
  styleUrls: ['./signals-get-updates.component.css'],
})
export class SignalsGetUpdatesComponent {
  price = signal<number>(10);
  priceUpdated = signal<boolean>(false);

  constructor() {
    effect(() => {
      console.log(`Price updated ${this.price()}`);
    });
  }

  updatePrice(): void {
    this.price.update((price) => price + 30);
    this.priceUpdated.set(true);
    setTimeout(() => {
      this.priceUpdated.set(false);
    }, 2000);
  }
}
