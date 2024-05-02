import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-important-tasks',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './important-tasks.component.html',
  styleUrl: './important-tasks.component.css'
})
export class ImportantTasksComponent {
  newTask = "";
  taskList:any[]=[];
  httpService = inject(HttpService);
  ngOnInit() {
    this.getAllTasks()
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result:any) => {
      this.taskList = result.filter((x:any)=>x.important==true)
    })
  }
  onComplete(task:any){
    task.completed=true;
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
}
