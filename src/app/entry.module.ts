import { NgModule } from '@angular/core';

import { RemoteEntryComponent } from './entry.component';
import {IMPORTS_CONF, PROVIDERS_CONF} from "./app.module";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    ...IMPORTS_CONF
  ],
  providers: [...PROVIDERS_CONF],
})
export class RemoteEntryModule {}
