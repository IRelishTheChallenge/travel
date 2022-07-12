import { Observable } from "rxjs";
import { LogsService } from "../logs.service";
import { Logs } from "../logs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-logs-list",
  templateUrl: "./logs-list.component.html",
  styleUrls: ["./logs-list.component.css"]
})
export class LogsListComponent implements OnInit {
  logs!: Observable<Logs[]>;


  constructor(private logsService: LogsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.logs = this.logsService.getLogsList();
  }

  deleteLogs(id: number){
    this.logsService.deleteLogs(id).subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  

  
  updateLogs(id: number) {
    this.router.navigate(['update', id]);
  }
}