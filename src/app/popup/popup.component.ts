import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import {MatGridListModule} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
	dialogResult = "";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OpenDialog(){
  let dialogRef = this.dialog.open(MyDialogComponent,{
  	width: "600px",
  	data: "this data comes from popup.component.ts opendialog function"
  });

  	// dialogRef.afterClosed().subscribe(result => {
  	// 	console.log('close dialog: ${result}');
  	// 	this.dialogResult = result;
  	// })
  }
}
