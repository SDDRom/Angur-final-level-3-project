import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { BooleanConstants } from '../constants/booleanconstants.enum';
import { AuthenticationService } from './authentication.service';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
LocalStorageService
BooleanConstants
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor
  (
    private localStorage: LocalStorageService, 
    private router: Router,
    private auth:AuthenticationService
    ) { }
  bool = new BooleanConstants();
  db = getFirestore();
  dbref = collection(this.db,'Users');
    addUser(user:IUser):Observable<any>{
      return from(addDoc(this.dbref,user))
    }

  logIn(user: IUser) {
    this.auth.login(user);
    const getUsersInLocalStorage = this.localStorage.get("Users");
    let loginStatus;
    if(getUsersInLocalStorage.data == null){
      alert(`Account Does not exist`);
      return
    }
    for (const userObject of getUsersInLocalStorage.data) {
      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        alert(`${userObject["name"]} logged in with success`);
        this.router.navigate(["/main"])

        return;
      }
      else{
        continue;
      }
      return;
    }
    alert(`password or name do not match`);
  }

  signUp(user:IUser){
    this.auth.signUP(user);
    this.addUser(user);
    const getUsersInLocalStorage = this.localStorage.get("Users");
    let usersInLocalStorage: Object[] = [];
    if (getUsersInLocalStorage.status === true) {
      
      usersInLocalStorage = getUsersInLocalStorage.data;
      // return usersInLocalStorage ;
    }
      for(const users of usersInLocalStorage){
        if(user.name === users["name" as keyof object]){
          alert("User exist");
          return;
        }
        if(user.email === users["email" as keyof object]){
          alert("User exist");
          return;
        }

      }
    let arrLength:number = usersInLocalStorage.length;
    let lastUser = usersInLocalStorage[arrLength-1];
    if(arrLength === 0){
      user["Id"] += 1;
      // return user["Id"]
    }else if(arrLength >= 1){
      // let Id 
      user["Id"] = lastUser["Id" as keyof object]+1; 
    }
    usersInLocalStorage.push(user);
     this.localStorage.set("Users", usersInLocalStorage);
     alert(`${user.name} registered successfully`);
     this.router.navigate(["/login"])

     return;
  }
}