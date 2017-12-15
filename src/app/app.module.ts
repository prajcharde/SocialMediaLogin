import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { AppComponent } from './app.component';


let providers = {
  "google": {
    "clientId": "346502243474-sa0bq8q5bu31hge781f29ratb14bcbis"
  },
  "facebook": {
    "clientId": "357644274649684",
    "apiVersion": "v2.4"
  }
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }
Angular2SocialLoginModule.loadProvidersScripts(providers);
