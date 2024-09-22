import { Component, EventEmitter, Input, Output ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskDat } from '../task/task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
  @Output () close = new EventEmitter<void>()
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private tasksService = inject(TaskService)
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
  this.tasksService.addTask({
   title:this.enteredTitle,
   summary:this.enteredSummary,
   data:this.enteredDate
  },
  this.userId);
  this.close.emit();
  }
  
}
