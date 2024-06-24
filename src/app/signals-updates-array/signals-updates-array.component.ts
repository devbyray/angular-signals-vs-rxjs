import { Component, effect, signal } from '@angular/core'

interface Obj {
	price: number
}

@Component({
	selector: 'app-signals-updates-array',
	styleUrls: ['./signals-updates-array.component.css'],
	templateUrl: './signals-updates-array.component.html'
})
export class SignalsUpdatesArrayComponent {
	prices = signal([{ price: 10 }, { price: 20 }, { price: 30 }])

	updatePrice(index: number): void {
		this.prices.update(value => {
			value[index].price = this.getRandomPrice()
			return value
		})
	}
	addPrice(): void {
		this.prices.update(value => {
			value.push({ price: this.getRandomPrice() })
			return value
		})
	}

	getRandomPrice(): number {
		return Math.round(Math.random() * 100)
	}
}
