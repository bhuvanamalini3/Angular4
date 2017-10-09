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

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
  
  ],

  entryComponents: [
  	MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
