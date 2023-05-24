import { Component, OnInit } from '@angular/core';
import { UserssessionService } from '../services/session/userssession.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user: IUser = {
    Id: 0,
    name: "",
    email: "",
    password: "",
    userTasks: undefined
  };
  username: string ='';
  loggedUser:any = '';
  constructor(private sesion: UserssessionService){}
  ngOnInit(): void {
    this.loggedUser = this.sesion.getsession();
    if(this.loggedUser){
      this.username=this.loggedUser.nameinit;
    }
  }

}
