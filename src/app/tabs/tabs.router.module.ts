import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pokemon',
        children: [
          {
            path: '',
            loadChildren: '../pokemon/pokemon.module#PokemonPageModule'
          },
          {
            path: ':pokemonId',
            loadChildren: '../pokemon/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'item',
        children: [
          {
            path: '',
            loadChildren: '../item/item.module#ItemPageModule'
          },
          {
            path: ':itemId',
            loadChildren: '../item/details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pokemon',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pokemon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
