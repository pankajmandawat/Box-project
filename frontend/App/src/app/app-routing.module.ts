import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UrlShortnerComponent } from './url-shortner/url-shortner.component';


const routes: Routes = [
  {path :'home' ,component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'signup' ,component:SignupComponent},
  {path:'sturl',component:UrlShortnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
