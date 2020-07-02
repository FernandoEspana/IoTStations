import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/sevices/auth.service';

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
        const value = this.forma.value;
        this.aService.login( value.email, value.password )
          .then( () => {
            this.router.navigate( ['./stations'] );
          })
          .catch( () => {
            alert( 'Error de autenticacion' );
          })
        
    }
  }

  cancel() {
    this.router.navigate(['../home']);
  }

}
