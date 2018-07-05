import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as fromServices from './services';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [...fromServices.services]
})
export class SharedModule {}
