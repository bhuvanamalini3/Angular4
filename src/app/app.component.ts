import { Component,Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterexampleComponent } from './routerexample/routerexample.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURRENCY CONVERTER';

}