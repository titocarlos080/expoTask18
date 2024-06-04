import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TextValidatorComponent } from '../../components/text-validator/text-validator.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [CommonModule, TextValidatorComponent, ReactiveFormsModule, DragDropModule],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  public name: string = '';
  public date: string = '';

  public customForm: FormGroup = this.formBuilder.group({
    'name': ['', Validators.required],
    'date': ['', Validators.required]
  });

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {}

  get tasks(): Task[] {
    return this.taskService.tasks;
  }

  get dones(): Task[] {
    return this.taskService.dones;
  }

  drop(event: CdkDragDrop<Task[]>): void {
    this.taskService._drop(event);
  }

  dropped(event: CdkDragDrop<Task[]>): void {
    this.taskService._dropped(event);
  }

  addTask() {
    this.taskService.addTask({ name: this.name, date: this.date, state: true });
  }

  fieldValidator(name: string): boolean | null {
    return this.customForm.controls[`${name}`].errors && this.customForm.controls[`${name}`].touched;
  }

  submitForm(): void {
    if (this.customForm.invalid) {
      this.customForm.markAllAsTouched();
      return;
    }

    this.taskService.addTask({ name: this.customForm.value.name, date: this.customForm.value.date, state: false });
  }
}
