import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-destinations',
        loadComponent: () =>
          import('../tab-destinations/tab-destinations-page.component').then(
            m => m.TabDestinationsPage
          ),
      },
      {
        path: 'tab-my-cards',
        loadComponent: () =>
          import('../tab-my-cards/tab-my-cards-page.component').then(
            m => m.TabMyCardsPage
          ),
      },
      {
        path: 'tab-profile',
        loadComponent: () =>
          import('../tab-profile/tab-profile-page.component').then(
            m => m.TabProfilePage
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab-my-cards',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab-my-cards',
    pathMatch: 'full',
  },
];
