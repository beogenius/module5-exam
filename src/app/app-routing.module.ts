import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {RestComponent} from './layout/rest/rest.component';
import {UpdateComponent} from './layout/update/update.component';
import {CreateComponent} from './layout/create/create.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    data: {
      title: 'Layout BOOK'
    },
    children: [
      {
        path: 'update/:id',
        component: UpdateComponent,
      },
      {
        path: 'list',
        component: RestComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
