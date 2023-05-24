import { ITask } from "./task.interface";

export interface IUser {
    name:string,
    email:string,
    password:string,
    Id:number,
    userTasks?:ITask
}