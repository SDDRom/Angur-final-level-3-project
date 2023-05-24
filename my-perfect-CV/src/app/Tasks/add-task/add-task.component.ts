import { Component } from '@angular/core';
import { ITask } from 'src/app/interfaces/task.interface';
import { TaskDifficulty, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { TasksService } from 'src/app/services/tasks.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  constructor(private taskService: TasksService, private router:Router){}

  task: ITask = {
    taskName: '',
    description: '',
    dueDate: '',
    startDate: '',
    level: TaskLevel.NOT_STARTED,
    difficulty: TaskDifficulty.STANDARD,
    status: TaskStatus.PROCESSING,
    userId: ''
  }

  saveTask() {
    // implement some form validators here
    if (this.task.taskName.length < 5 || this.task.description.length < 20) {
      alert('Name or description has an invalid length')
    }
    this.task.id = Date.now()
    this.taskService.addTask(this.task);  
    this.router.navigate(['/task-list'])

  }
  
}
