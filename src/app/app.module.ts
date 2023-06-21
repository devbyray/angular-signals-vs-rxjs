import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { SignalsSetValueComponent } from './signals-set-value/signals-set-value.component';
import { SignalsUpdateValueComponent } from './signals-update-value/signals-update-value.component';
import { AppRoutingModule } from './app-routing.module';
import { SignalsGetUpdatesComponent } from './signals-get-updates/signals-get-updates.component';
import { SignalsComputeValueComponent } from './signals-compute-value/signals-compute-value.component';
import { SignalsGetUpdatesEffectUpdateComponent } from './signals-get-updates-effect-update/signals-get-updates-effect-update.component';
import { SignalsUpdatesArrayComponent } from 'src/app/signals-updates-array/signals-updates-array.component';

@NgModule({
  declarations: [
    AppComponent,
    BehavioursubjectComponent,
    SignalsSetValueComponent,
    SignalsUpdateValueComponent,
    SignalsGetUpdatesComponent,
    SignalsComputeValueComponent,
    SignalsGetUpdatesEffectUpdateComponent,
    SignalsUpdatesArrayComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
