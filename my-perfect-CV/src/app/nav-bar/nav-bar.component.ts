import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserssessionService } from '../services/session/userssession.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() loggedUser:string = '';

  constructor(private userservice: UsersService, private session: UserssessionService) { }
  user: IUser = {
    Id: 0,
    name: "",
    email: "",
    password: "",
    userTasks:{
      taskName:"",
      description:"",
      startDate:"",
      dueDate:"",
      status:"",
      difficulty:"",
      level:"",
      userId:"",
      id:0

    }
  }

  userState = this.userservice.bool.loginStatus
  buttonType: string = 'button'
  sectionClass: string = 'bout';
  logoutfnx() {
    this.session.dltsession(this.user);
  }
}
