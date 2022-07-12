import { Component, OnInit } from "@angular/core";
import {Logs} from '../logs';
import { ActivatedRoute, Router } from "@angular/router";
import { LogsService } from "../logs.service";

@Component({
    selector: 'app-update-logs',
    templateUrl: './update-logs.component.html',
    styleUrls: ['./update-logs.component.css']
  })

export class updateLogsComponent implements OnInit{
    id!: number
    logs!: Logs;
    submitted = false;
    
    constructor(private route: ActivatedRoute, private router: Router,
        private logsService: LogsService){}

    ngOnInit(){
        this.logs = new Logs();
        this.id = this.route.snapshot.params['id'];
        this.logsService.getLog(this.id)
        .subscribe(data => {
            this.logs = data;
        },error => console.log(error));
    }

    updateLogs(){
        this.logsService.updateLogs(this.id, this.logs).subscribe(data =>{
            console.log(data);
            this.logs = new Logs();
            
        }, error => console.log(error));
    }

    onSubmit() {
        this.submitted = true;
        this.updateLogs();
      }
}