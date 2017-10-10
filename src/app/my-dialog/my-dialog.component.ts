import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {


  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  // CloseConfrim(){
  // 	this.thisDialogRef.close();
  // }

  CloseCancel(){
  	this.thisDialogRef.close();
  }
  //validation
    
}
