import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
      },
      { path: 'login', component: LoginComponent },
      { 
        path: 'dashboard', 
        component : DashboardComponent, 
        children: []
      }
    ], { useHash: true }),
  ],
providers: [RouterModule, HttpClientModule, HttpClient],
bootstrap: [AppComponent]
})
export class AppModule { }