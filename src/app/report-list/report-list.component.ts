import { LogsService } from "../logs.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-report-list",
  templateUrl: "./report-list.component.html",
  styleUrls: ["./report-list.component.css"],
})

export class ReportListComponent implements OnInit {
    logs!: any;
    ownerName!: String;
    regNumber!: String;
    date1!: String;
    date2!: String;
    total=0;    
    value; 
  
  
    constructor(private logsService: LogsService,
      private router: Router) { }
  
    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.logsService.getDefaultReport().subscribe((rsult:any)=>{  
        this.logs=rsult
        this.findsum(this.logs);
      })
    }

    findsum(data){
      this.value=data
      this.total=0
      for(let j=0;j<data.length;j++){   
           this.total+= this.value[j].odometerEnd- this.value[j].odometerStart
      }  
    }

    

    

    filterData(){

      if(!this.ownerName && !this.regNumber && this.date1 && this.date2 ){
        this.logsService.getSortByDate(this.date1, this.date2).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(!this.date1 && !this.date2 && !this.ownerName && this.regNumber){
        this.logsService.getSortByRegNumber(this.regNumber).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(!this.date1 && !this.date2 && !this.regNumber && this.ownerName){
        this.logsService.getSortByNameReport(this.ownerName).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(!this.ownerName && this.date1 && this.date2 && this.regNumber){
        this.logsService.getSortByRegNumberAndDate(this.regNumber, this.date1, this.date2).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(!this.regNumber && this.date1 && this.date2 && this.ownerName){
        this.logsService.getSortByNameAndDate(this.ownerName, this.date1, this.date2).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(!this.date1 && !this.date2 && this.ownerName && this.regNumber){
        this.logsService.getSortByNameAndRegNumber(this.ownerName, this.regNumber).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }else if(this.ownerName && this.regNumber && this.date1 && this.date2){
        this.logsService.getSortByNameRegNumberAndDate(this.ownerName, this.regNumber, this.date1, this.date2).subscribe((rsult:any)=>{  
          this.logs=rsult
          this.findsum(this.logs);
        })
      }
    }

    onSubmit() {
      debugger
      this.filterData();
    }
  }

  