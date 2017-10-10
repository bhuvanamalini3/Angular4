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
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routing";
import { RouterexampleComponent } from './routerexample/routerexample.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import {MatToolbarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { RegisterpopupComponent } from './registerpopup/registerpopup.component';
import { MyDialogRegisterComponent } from './my-dialog-register/my-dialog-register.component';
@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MyDialogComponent,
    RouterexampleComponent,
    SecondpageComponent,
    LoginComponent,
    RegisterComponent,
    RegisterpopupComponent,
    MyDialogRegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    GridModule,
    HttpModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(AppRoutes)
  ],

  entryComponents: [
  	MyDialogComponent,MyDialogRegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
