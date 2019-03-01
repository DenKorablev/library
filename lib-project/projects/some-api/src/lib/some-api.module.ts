import { NgModule } from '@angular/core';
import { SomeApiComponent } from './some-api.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [SomeApiComponent, ButtonComponent],
  imports: [
  ],
  exports: [SomeApiComponent]
})
export class SomeApiModule { }
