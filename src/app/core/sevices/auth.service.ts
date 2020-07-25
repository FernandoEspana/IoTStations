import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  register(email: string, passeword: string) {
    return this.afa.createUserWithEmailAndPassword(email, passeword);
  }

  isLogged() {
    return this.afa.authState
  }

  logout() {
    return this.afa.signOut();
  }
}
