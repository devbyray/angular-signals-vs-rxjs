import { Component, OnInit, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals-get-updates',
  templateUrl: './signals-get-updates.component.html',
  styleUrls: ['./signals-get-updates.component.css'],
})
export class SignalsGetUpdatesComponent implements OnInit {
  startPrice = signal<number>(10);
  priceUpdated = signal<boolean>(false);
  status = signal<'initial' | 'loaded'>('initial');

  ngOnInit(): void {
    this.status.set('loaded');
  }

  private priceUpdatedEffect = effect(() => {
    console.log(`Price updated ${this.startPrice()}`);
  });

  updatePrice() {
    this.startPrice.update((price) => price + 30);
    this.priceUpdated.set(true);
    setTimeout(() => {
      this.priceUpdated.set(false);
    }, 2000);
  }
}
