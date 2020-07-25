import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/sevices/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forma:FormGroup;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private aService: AuthService) { 
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
    if (this.forma.valid) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        title: 'Esperando respuesta',
        text: 'Esto puede tardar unos segundos...'
      });
      Swal.showLoading();
      const value = this.forma.value;
      this.aService.register(value.email, value.password)
        .then( () => {
          Swal.close();
          this.router.navigate(['../stations']);
        }).catch( ( err ) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: err.code,
            text: err.message
          });
        });
    }
  }

}
