import { Component, effect, signal } from '@angular/core'

interface Obj {
	price: number
}

@Component({
	selector: 'app-signals-updates-array',
	styleUrls: ['./signals-updates-array.component.css'],
	templateUrl: './signals-updates-array.component.html',
})
export class SignalsUpdatesArrayComponent {
	prices = signal<Obj[]>([
		{ price: 10},
        { price: 20},
        { price: 30},
	])

    updatePrice(index: number): void {
        this.prices.mutate(value => value[index].price = this.getRandomPrice())
	}
	addPrice(): void {
		this.prices.mutate(value => value.push({ price: this.getRandomPrice() }))
	}

	getRandomPrice(): number {
		return Math.round(Math.random() * 100)
	}
}
