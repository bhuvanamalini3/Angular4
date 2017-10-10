import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material';
@Component({
  selector: 'app-my-dialog-register',
  templateUrl: './my-dialog-register.component.html',
  styleUrls: ['./my-dialog-register.component.css']
})
export class MyDialogRegisterComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MyDialogRegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { 

  }

  ngOnInit() {
  }

}
