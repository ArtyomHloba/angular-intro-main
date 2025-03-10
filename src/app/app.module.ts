import { NgModule } from '@angular/core'
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskListComponent } from './components/task-list/task-list.component'
import { TaskItemComponent } from './components/task-item/task-item.component'
import { StatusFilterPipe } from './share/pipes/status-filter.pipe'
import { TaskFormComponent } from './components/task-form/task-form.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    StatusFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TaskFormComponent],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent]
})
export class AppModule {}
