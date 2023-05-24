import { Injectable } from '@angular/core';
import { SessionstorageService } from './sessionstorage.service';
import { LocalStorageService } from '../local-storage.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserssessionService {

  user: IUser = {
    Id: 0,
    name: "",
    email: "",
    password: ""
  };
  constructor(private sessionstore: SessionstorageService , private database: LocalStorageService, private router:Router) { }

  crtsession(user: IUser) {
    const getUsersInLocalStorage = this.database.get("Users");
    if(getUsersInLocalStorage.data == null){
      alert(`An error occured`);
      return;
    }
    for (const userObject of getUsersInLocalStorage.data) {

      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        user["name"] = userObject["name"];
        user["Id"] = userObject["Id"];
        this.sessionstore.set("loggedUser", user);
        // alert(`${user["name"]}'s session created with success.`)

      } else {
        continue
      }
      return
    }

  }
  getsession() {
    let userInScope = this.sessionstore.get("loggedUser");
    console.log(userInScope);


    if (userInScope.status){
      let someValue = {
        Id: userInScope.data['Id'],
        nameinit: userInScope.data["name"]
      }
    return someValue;
    }
    return null;
  }
  dltsession(user:IUser) { 
    this.sessionstore.clear();
    if(this.sessionstore.clear().status === true){
      this.router.navigate(["/login"])
    }
    else{
      return;
    }
  }
}
