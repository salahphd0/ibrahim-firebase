import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user= new BehaviorSubject<firebase.User | boolean>(false);
  userData: firebase.User;
  subscribe: any;
  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.authState.subscribe(user => {
    if (user){
      this.user.next(user);
      this.userData = user;
    } else {
      this.user.next(false);

      this.userData = undefined;
  }

});
}
  async login(email: string,password: string): Promise<void>{
    try{
      await this.fireAuth.signInWithEmailAndPassword(
      email,
      password
      );
    }catch (error) {
     alert(error.message);
    }
  }
  async register(email: string, password: string): Promise<void>{
  try{
      await this.fireAuth.createUserWithEmailAndPassword(email,password);
    }catch (error) {
          alert(error.message);
    }
  }
  async logout(){
    try{
      await this.fireAuth.signOut();
        }catch (error) {
          alert(error.message);
        }
  }
}
