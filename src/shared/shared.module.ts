import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as fromServices from './services';
import { servicesProducto } from './services/indexProducto';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [...fromServices.services,servicesProducto]
})
export class SharedModule {}
