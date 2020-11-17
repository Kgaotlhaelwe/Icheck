import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {AuthService} from "../auth.service"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  name:string;
  email:string ;
  password:string

  constructor(public router:Router , public auth:AuthService) { }

  ngOnInit() {
  }


  SignUp(){
    this.auth.SignUp(this.email, this.password).then(()=>{
      console.log('IM IN')

    })
  }
  login(){
    this.router.navigateByUrl('/')
  }

}
