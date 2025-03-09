import { Task } from '../models/task.model'
import { TaskStatus } from '../models/status.enum'

export const tasks: Task[] = [
  {
    id: 0,
    title: 'Встановити Angular',
    assignee: 'Артем Глоба',
    dueDate: new Date('2025-02-14'),
    status: TaskStatus.DONE
  },
  {
    id: 1,
    title: 'Ознайомитися з компонентами',
    description: 'Ознайомитися з компонентами та оглянути взаємодвію між ними',
    assignee: 'Артем Глоба',
    dueDate: new Date('2025-02-14'),
    status: TaskStatus.IN_PROGRESS
  },
  {
    id: 2,
    title: 'Ознайомитися з Control Flow',
    description: 'Ознайомитися з Control Flow',
    assignee: 'Артем Глоба',
    dueDate: new Date('2025-02-14'),
    status: TaskStatus.TODO
  }
]
