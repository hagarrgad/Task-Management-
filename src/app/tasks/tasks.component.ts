import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {  type NewTaskDat } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) userId! :string;
   @Input( {required : true} ) name? : string;
   isAddingTask = false ;

  constructor( private tasksService : TaskService){}
   
   get selectedUserTasks(){
     return this.tasksService.getUserTask(this.userId);//hena wkhda input el hwa el id w broh a3ml filter from el lisr el user id bl id ely shylah
   }
   

   
   onStartAddTask(){
    this.isAddingTask = true;
   }
   onCloseAddTask(){
    this.isAddingTask =false;
   }

  
}
