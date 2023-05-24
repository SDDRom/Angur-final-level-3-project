import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task.interface';
import { TaskDifficulty, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {


  tasks: ITask[] = [{
    taskName: 'Teach JavaScript',
    description: 'Js master class',
    status: TaskStatus.PAUSED,
    userId: '1',
    startDate: new Date(Date.now()),
    dueDate: "12/04/2023",
    level: TaskLevel.PROGRESS,
    difficulty: TaskDifficulty.MEDIUM
  },
  {
    taskName: 'Teach Angular',
    description: 'Angular master class',
    status: TaskStatus.SUCCESS,
    userId: '2',
    startDate: new Date(Date.now() + 100),
    dueDate: "13/04/2023",
    level: TaskLevel.PROGRESS,
    difficulty: TaskDifficulty.HIGH
  }]

  constructor(private taskService: TasksService , private tsRouter: Router) { }

  ngOnInit(): void {
    let allTasks = this.taskService.getTasks();
    this.tasks = [...this.tasks, ...allTasks.data];
  }

  toBeClicked(){
    this.tsRouter.navigate(['/task-detail'])
  }

}
