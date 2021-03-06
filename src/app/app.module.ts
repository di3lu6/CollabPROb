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
import { SitewebComponent } from './siteweb/siteweb.component';
import { AppmovilComponent } from './appmovil/appmovil.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { MailmarketingComponent } from './mailmarketing/mailmarketing.component';
import { GdbrandingComponent } from './gdbranding/gdbranding.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';

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
    MailmarketingComponent,
    GdbrandingComponent,
    AuditoriaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
