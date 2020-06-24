import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

forma: FormGroup;
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>,
              private fb: FormBuilder) {
                this.crearFormulario();
  }
  ngOnInit() {
  }
  logIn() {
   // this.dialogRef.componentInstance;
    console.log(this.forma);
    this.dialogRef.close();
  }
  noCLick() {
    this.dialogRef.close();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      email: ['',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      clave: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}
