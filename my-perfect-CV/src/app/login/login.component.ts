import { Component, OnChanges, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { IUser } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';
import { UserssessionService } from '../services/session/userssession.service';
import { BooleanConstants } from '../constants/booleanconstants.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges {
  constructor(private store:LocalStorageService, private userService:UsersService, private session: UserssessionService ){}
  loginStatus = new BooleanConstants();
  ngOnChanges(): void{

  }

    
  user: IUser = {
    Id: 0,
    name:"",
    email:"",
    password:""
  }
  submitForm(){
    this.userService.logIn(this.user);
    this.session.crtsession(this.user);
    
  }
}
