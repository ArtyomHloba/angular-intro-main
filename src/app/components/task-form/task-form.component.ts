import {
  Component,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms'
import { TaskStatus } from '../../core/models/status.enum'
import { Task } from '../../core/models/task.model'
import { TaskFormValidator } from '../../share/directives/task-form.validator'

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class TaskFormComponent implements OnChanges {
  @Output() taskAdd = new EventEmitter<Task>()
  @Input() editTask: Task | null = null

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(
      '',
      TaskFormValidator.forbiddenWordsValidator(['React', 'Vue'])
    ),
    dueDate: new FormControl('', [
      Validators.required,
      TaskFormValidator.dateValidator
    ]),
    assignee: new FormControl('', Validators.required),
    status: new FormControl(TaskStatus.TODO, Validators.required)
  })

  TaskStatus = TaskStatus

  addTask (): void {
    if (this.taskForm.valid) {
      let taskData: { dueDate: Date; id: number | undefined } = {
        ...this.taskForm.value,
        dueDate: this.taskForm.value.dueDate
          ? new Date(this.taskForm.value.dueDate)
          : new Date(),
        id: this.editTask ? this.editTask.id : undefined
      }
      this.taskAdd.emit(taskData as Task)
      this.taskForm.reset()
    }
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['editTask'] && this.editTask) {
      this.taskForm.patchValue({
        ...this.editTask,
        dueDate: this.editTask.dueDate.toISOString().split('T')[0]
      })
    }
  }
}
