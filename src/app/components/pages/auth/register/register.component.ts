import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forma:FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: [''],
      email: [''],
      password: ['']
    });
  }

}
