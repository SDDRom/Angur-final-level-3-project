import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: LocalStorageService) { }

  addTask(task: ITask) {
    let tasks = this.store.get('Tasks');
    if (tasks.status && tasks.data.length > 1) {
      tasks.data.push(task);
      this.store.set('Tasks', tasks);
      return;
    }
    this.store.set('Tasks', [task]);
    return;
  }
  getTasks() {
    return this.store.get('Tasks');
  }
}
