import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { LocalStoreService } from './local-store-service';
import { RemoteApiService } from './remote-api.service';

@NgModule({
  //imports: [CommonModule],
  // declarations: [
  // ]
  //,exports: [CreditCardComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule should only be imported in the root NgModule of the application!");
        }
    }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [LocalStoreService, RemoteApiService]
    }
  }
}