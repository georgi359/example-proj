import { Routes } from '@angular/router';

export const routes: Routes = [
	// Root / home route (lazy-load standalone HomeComponent)
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
	},

	// Contacts page (lazy-loaded standalone component)
	{
		path: 'contacts',
		loadComponent: () => import('./pages/contacts/contacts.component').then((m) => m.ContactsComponent),
	},

	// Projects page (lazy-loaded standalone component)
	{
		path: 'projects',
		loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
	},

];
