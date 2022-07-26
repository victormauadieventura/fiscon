import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { CoreRegistrationsComponent } from './core-registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
  ],
	declarations: [
    CoreRegistrationsComponent,
  ],
  exports: [
    CoreRegistrationsComponent,
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class registrationModule {}
