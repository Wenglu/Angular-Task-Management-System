import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { NgFor } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TasksItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
