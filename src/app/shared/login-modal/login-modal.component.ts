import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { email: string }) {
                this.data.email = 'papagayoplus@gmail.com';
              }

  ngOnInit() {
  }
  logIn() {
   // this.dialogRef.componentInstance;
    console.log();
  }
  noCLick() {
    this.dialogRef.close();
  }

}
