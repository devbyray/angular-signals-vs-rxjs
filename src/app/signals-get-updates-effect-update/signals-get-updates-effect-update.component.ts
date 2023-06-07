import { Component, effect, signal } from '@angular/core'

@Component({
	selector: 'app-signals-get-updates-effect-update',
	templateUrl: './signals-get-updates-effect-update.component.html',
	styleUrls: ['./signals-get-updates-effect-update.component.css']
})
export class SignalsGetUpdatesEffectUpdateComponent {
	price = signal<number>(10)
	priceUpdated = signal<boolean>(false)

	constructor() {
		effect(
			() => {
				console.log(`Price updated ${this.price()}`)

				this.priceUpdated.set(true)
				setTimeout(() => {
					this.priceUpdated.set(false)
				}, 2000)
			},
			{ allowSignalWrites: true }
		)
	}

	updatePrice() {
		this.price.update(price => price + 30)
	}
}
