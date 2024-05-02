import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, TaskListComponent],
  templateUrl: './all-task.component.html',
  styles: ''
})
export class AllTaskComponent {
  newTask = "";
  taskList:any[]=[];
  editMode = false;
  editedTask: any = null;
  httpService = inject(HttpService);
  ngOnInit() {
    this.getAllTasks()
  }
  addTask() {
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask=""
      this.getAllTasks();
    })
  }
  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result:any) => {
      this.taskList = result
    })
  }
  onComplete(task:any){
    task.completed= true;
    console.log("completed", task)
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }
  onImportant(task:any){
    task.important=true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }
  onDelete(task:any) {
    this.httpService.deleteTask(task).subscribe(() => {
      this.getAllTasks()
    })
  }
  enterEditMode(task: any) {
    this.editMode = true;
    this.editedTask = { ...task };
  }

  saveChanges() {
    if (this.editedTask) {
      this.httpService.updateTask(this.editedTask).subscribe(() => {
        this.getAllTasks();
      });
    }
  }
}


