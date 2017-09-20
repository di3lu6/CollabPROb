
	import { RouterModule, Routes } from '@angular/router';

	import { RegisterComponent } from "./login/register/register.component";
	import { ServicesComponent } from "./services/services.component";
	import { AppmovilComponent } from "./appmovil/appmovil.component";

	const app_routes: Routes = [
		{ path: 'register', component: RegisterComponent },
		{ path: 'services', component: ServicesComponent },
		{ path: 'appmovil', component: AppmovilComponent },
		{ path: '**', pathMatch: 'full', redirectTo: '#' }
	];

	export const app_routing = RouterModule.forRoot(app_routes);