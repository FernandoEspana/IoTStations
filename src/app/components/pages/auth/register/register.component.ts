import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forma:FormGroup;
  
  constructor(private fb: FormBuilder,
              private router: Router) { 
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['',[Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.minLength(6), Validators.required]]
    });
  }

  cancel() {
    console.log('debe devolver a incio');
    this.router.navigate(['../home']);
  }

  register() {
    console.log('llamar servicio de registro');
  }

}
