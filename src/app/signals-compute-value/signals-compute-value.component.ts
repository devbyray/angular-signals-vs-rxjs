import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-compute-value',
  templateUrl: './signals-compute-value.component.html',
  styleUrls: ['./signals-compute-value.component.css']
})
export class SignalsComputeValueComponent {
  firstName = signal('Bart')
  lastName = signal('The Great')
  
  fullName = computed(() => this.firstName() + ' ' + this.lastName())
  
  changeFirstName() {
    this.firstName.set('Ray')
  }
}
