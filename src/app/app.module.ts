import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//RUTAS
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SoMeMaComponent } from './services/so-me-ma/so-me-ma.component';
import { AppmovilComponent } from './services/appmovil/appmovil.component';
import { SitewebComponent } from './services/siteweb/siteweb.component';
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
    SoMeMaComponent,
    AppmovilComponent,
    SitewebComponent,
    MailmarketingComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
