import { LogsService } from "../logs.service";
import { Logs } from "../logs";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-create-logs',
    templateUrl: './create-logs.component.html',
    styleUrls: ['./create-logs.component.css']
})
export class CreatLogsComponent implements OnInit{
    logs: Logs = new Logs();
    submitted = false;

    constructor(private logsService: LogsService,
        private router: Router){}

    ngOnInit(){
    }

    newLogs(): void{
        this.submitted = false;
        this.logs = new Logs();
    }

    gotoList() {
        this.router.navigate(['/logs']);
      }

    save(){
        this.logsService.createLogs(this.logs).subscribe(data =>
            {
             console.log(data)
             this.logs = new Logs();
             this.gotoList();
            },
            error => console.log(error));
    }
    
    
    onSubmit() {
        this.submitted = true;
        this.save();
      }
}