import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SignalsSetValueComponent } from './signals-set-value/signals-set-value.component';
import { SignalsUpdateValueComponent } from './signals-update-value/signals-update-value.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { SignalsGetUpdatesComponent } from './signals-get-updates/signals-get-updates.component';
import { SignalsGetUpdatesEffectUpdateComponent } from 'src/app/signals-get-updates-effect-update/signals-get-updates-effect-update.component';
import { SignalsComputeValueComponent } from 'src/app/signals-compute-value/signals-compute-value.component';
import { SignalsUpdatesArrayComponent } from 'src/app/signals-updates-array/signals-updates-array.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'signals-set-value', component: SignalsSetValueComponent },
  { path: 'signals-update-value', component: SignalsUpdateValueComponent },
  { path: 'signals-get-updates', component: SignalsGetUpdatesComponent },
  { path: 'signals-get-updates-array', component: SignalsUpdatesArrayComponent },
  { path: 'signals-get-updates-effect-overwrite', component: SignalsGetUpdatesEffectUpdateComponent },
  { path: 'signals-compute-value', component: SignalsComputeValueComponent },
  // BehaviorSubject
  { path: 'behavioursubject', component: BehavioursubjectComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
