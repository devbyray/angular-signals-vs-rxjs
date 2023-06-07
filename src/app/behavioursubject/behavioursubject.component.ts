import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrls: ['./behavioursubject.component.css'],
})
export class BehavioursubjectComponent {
  firstName = new BehaviorSubject('Bart');
  lastName = new BehaviorSubject('The Great');

  fullName = combineLatest([this.firstName, this.lastName]).pipe(
    map(([first, last]) => first + ' ' + last)
  );

  changeFirstName() {
    this.firstName.next('Raymon');
  }
}
