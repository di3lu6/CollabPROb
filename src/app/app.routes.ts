
	import { RouterModule, Routes } from '@angular/router';

	import { RegisterComponent } from "./login/register/register.component";

	const app_routes: Routes = [
		{ path: 'register', component: RegisterComponent },
		{ path: '**', pathMatch: 'full', redirectTo: '#' }
	];

	export const app_routing = RouterModule.forRoot(app_routes);