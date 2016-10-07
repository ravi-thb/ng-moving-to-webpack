import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import {AuthGuard} from '../shared/auth/auth.guard';
import { HelloComponent }       from './hello.component';
import { QwerComponent }       from './qwer.component';
import {BasicExampleComponent} from './basic/basic-example.component';
import {JsonFormExampleComponent} from './jsonForm/json-form-example-component';
import {NewJsonFormExampleComponent} from './newjsonForm/newjson-form.component';

const routes: Routes = [
  { path: 'asdf',
    component: HelloComponent,
    canActivate: [AuthGuard]
  },
  { path: 'qwer',
    component: QwerComponent
  },
   { path: 'form',
    component: BasicExampleComponent
  },
   { path: 'jsonform',
    component: JsonFormExampleComponent
  },{ path: 'metric-form',
    component: NewJsonFormExampleComponent
  },
  { path: '**',
    component: HelloComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);