import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SitewebComponent } from './services/siteweb/siteweb.component';
import { AppmovilComponent } from './services/appmovil/appmovil.component';
import { SocialmediaComponent } from './services/socialmedia/socialmedia.component';
import { MailmarketingComponent } from './services/mailmarketing/mailmarketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserheaderComponent,
    DashboardComponent,
    ServicesComponent,
    SitewebComponent,
    AppmovilComponent,
    SocialmediaComponent,
    MailmarketingComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
