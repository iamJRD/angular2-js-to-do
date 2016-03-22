import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="task-form">
      <h3>Edit description:</h3>
      <input [(ngModel)]="task.description" class="col-md-8 input-lg task-form"/>
      <select [(ngModel)]="task.priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
