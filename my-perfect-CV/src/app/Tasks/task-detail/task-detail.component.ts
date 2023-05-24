import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {

  tasks: ITask | any;
  taskId: string | number = 0;

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((data: any) => {
      this.taskId = data?.id;
    })
  }
}
