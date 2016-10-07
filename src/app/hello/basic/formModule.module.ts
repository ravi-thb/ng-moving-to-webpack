// import {NgModule, ModuleWithProviders, Optional, SkipSelf} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// //import {RouterModule} from '@angular/router';
// import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
// import {BasicExampleComponent} from "./basic/basic-example.component";
// import {DynamicFormsBasicUIModule} from './ui-basic/src/ui-basic.module';

// @NgModule({
//     imports: [
//         CommonModule,DynamicFormsBasicUIModule,
//         FormsModule,
//         ReactiveFormsModule,
//         DynamicFormsCoreModule.forRoot(),
//     ],
//     declarations: [
//         BasicExampleComponent,
//     ]
// })

// export class formModule {
//     constructor(@Optional() @SkipSelf() parentModule: formModule) {
//         if (parentModule) {
//             throw new Error("formModule should only be imported in the root NgModule of the application!");
//         }
//     }
//     static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: formModule
//     }
//   }
// }
