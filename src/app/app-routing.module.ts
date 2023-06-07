import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SignalsSetValueComponent } from './signals-set-value/signals-set-value.component';
import { SignalsUpdateValueComponent } from './signals-update-value/signals-update-value.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { SignalsGetUpdatesComponent } from './signals-get-updates/signals-get-updates.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'signals-set-value', component: SignalsSetValueComponent },
  { path: 'signals-update-value', component: SignalsUpdateValueComponent },
  { path: 'signals-get-updates', component: SignalsGetUpdatesComponent },
  // BehaviorSubject
  { path: 'behavioursubject', component: BehavioursubjectComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
