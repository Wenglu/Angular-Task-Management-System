import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'] 
})
export class TasksItemComponent {
  @Input() task: Task | undefined;
  faTimes = faTimes;

  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
}
