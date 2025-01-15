import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
  newTask:string="";
  
  tasks:{name:string;completed:boolean}[]=[];

  // add new task
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = ''; // Clear the input field
    }
  }
  // Toggle task completion
  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
