import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {AuthService} from "../auth.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string
  password:string

  constructor(public router:Router,public auth:AuthService) { }

  ngOnInit() {
  }

  Login(){
    this.auth.Login(this.email, this.password).then(()=>{
      console.log("Im in")

    }).catch((error)=>{
      console.log(error.message);
      

    })

  }

  signup(){
     this.router.navigateByUrl('/sign-up')
  }

}
