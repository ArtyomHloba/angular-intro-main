import { Injectable } from '@angular/core'
import { Task } from '../core/models/task.model'
import { tasks } from '../core/moc_data/tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [...tasks]

  constructor () {}

  addTask (newTask: Task): void {
    const maxId: number =
      this.tasks.length > 0
        ? Math.max(...this.tasks.map((task: Task) => task.id))
        : 0

    newTask = {
      ...newTask,
      id: maxId + 1
    }

    this.tasks.push(newTask)
  }

  updateTask (updateTask: Task): void {
    this.tasks = this.tasks.map((t: Task) =>
      t.id === updateTask.id ? { ...updateTask } : t
    )
  }

  deleteTask (index: number): void {
    this.tasks = this.tasks.filter(task => task.id !== index)
  }

  getTasks (): Task[] {
    return this.tasks
  }
}
