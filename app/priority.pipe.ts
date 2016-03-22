import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    // var desiredPriority = args[0];
  }
}
