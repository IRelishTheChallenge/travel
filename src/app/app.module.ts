import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsListComponent} from './logs-list/logs-list.component';
import { CreatLogsComponent } from './create-logs/create-logs.component';
import { updateLogsComponent } from './update-logs/update-logs.component';
import{ ReportListComponent} from './report-list/report-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsListComponent,
    CreatLogsComponent,
    updateLogsComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
