import { Component,Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterexampleComponent } from './routerexample/routerexample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This app is just for understanding purpose!';

}