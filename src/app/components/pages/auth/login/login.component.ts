import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/sevices/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private aService:AuthService) { 
    this.crearFormulario();
  }

  ngOnInit() {
    
  }

  crearFormulario() {
    this.forma = this.fb.group({
      email: ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required, Validators.minLength(6) ] ]
    });
  }

  login( ) {
    
    if( this.forma.valid ) {
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          title: 'Esperando respuesta',
          text: 'Esto puede tardar unos segundos...'
        });
        Swal.showLoading();
        const value = this.forma.value;
        this.aService.login( value.email, value.password )
          .then( () => {
            Swal.close();
            this.router.navigate( ['./stations'] );
          })
          .catch( ( err ) => {
            
            console.log( err );
            Swal.fire({
              icon: 'error',
              title: err.code,
              text: err.message
            });
            
          })
        
    }
  }

  cancel() {
    this.router.navigate(['../home']);
  }

}
