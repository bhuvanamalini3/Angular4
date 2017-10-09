import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatGridListModule} from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { RouterModule, Routes } from '@angular/router';
import { RouterexampleComponent } from './routerexample/routerexample.component';

const appRoutes: Routes = [
  { path: 'routerexample', component: RouterexampleComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MyDialogComponent,
    RouterexampleComponent
  ],
  imports: [

     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purpose
    ),

    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    GridModule,
    RouterModule
  ],

  entryComponents: [
  	MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
