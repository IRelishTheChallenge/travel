import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogsListComponent } from './logs-list/logs-list.component';
import { CreatLogsComponent } from './create-logs/create-logs.component';
import { updateLogsComponent } from './update-logs/update-logs.component';
import { ReportListComponent} from './report-list/report-list.component';

const routes: Routes = [
  {path: '', component: LogsListComponent},
  {path: 'add', component: CreatLogsComponent},
  {path: 'update/:id', component: updateLogsComponent},
  {path: 'report', component: ReportListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
