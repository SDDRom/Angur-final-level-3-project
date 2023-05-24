import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../interfaces/user.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private store:UsersService){}
  user : IUser = {
    Id : 0,
    name : "",
    email: "",
    password:""
  };
  Register(){
    if(this.user.name == ""){
      alert("User name required");
      return;
    }
    if(this.user.email == ""){
      alert("User email required");
      return;
    }
    if(this.user.email.includes("@") == false){
        alert("valid email required");
        return;
    }
    if(this.user.password == ""){
      alert("password required");
      return;
    }
    
    this.store.signUp(this.user);
    // window.location.replace("/sign-in");

  }
}
