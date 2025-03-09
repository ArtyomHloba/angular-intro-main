import { Component, Input, EventEmitter, Output } from '@angular/core'
import { Task } from '../../core/models/task.model'
import { TaskStatus } from '../../core/models/status.enum'

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>()
  TaskStatus = TaskStatus
  @Output() taskEdited: EventEmitter<Task> = new EventEmitter<Task>()

  deleteTask (id: number): void {
    this.taskDeleted.emit(id)
  }

  editTask (): void {
    this.taskEdited.emit(this.task)
  }

  updateStatus (event: Event) {
    const selectedStatus = (event.target as HTMLSelectElement)
      .value as TaskStatus
    this.task.status = selectedStatus
  }
  getStatusClasses () {
    return {
      done: this.task.status === TaskStatus.DONE,
      todo: this.task.status === TaskStatus.TODO,
      in_progress: this.task.status === TaskStatus.IN_PROGRESS
    }
  }
}
