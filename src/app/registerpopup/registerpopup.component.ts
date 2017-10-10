import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogRegisterComponent } from '../my-dialog-register/my-dialog-register.component';
import {MatGridListModule} from '@angular/material';

@Component({
  selector: 'app-registerpopup',
  templateUrl: './registerpopup.component.html',
  styleUrls: ['./registerpopup.component.css']
})
export class RegisterpopupComponent implements OnInit {


  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
  }

  OpenRegister(){
  let dialogRef = this.dialog.open(MyDialogRegisterComponent,{
  	width: "600px",
  	data: "this data comes from popup.component.ts opendialog function"
  });
  }

}
