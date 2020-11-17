import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { rejects } from 'assert';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  Login(email, password) {
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password).then(() => {
        resolve()
      });
    }).catch((error)=>{
        rejects(error);
        
    });
  }

  SignUp(email, password){
    return new Promise((resolve, reject)=>{
      this.auth.auth.createUserWithEmailAndPassword(email,password).then(()=>{
      }).catch((error)=>{
        rejects(error);
      })
   
    })
  }
}
