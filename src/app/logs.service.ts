import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private baseUrl = 'http://localhost:8080/logs';

  constructor(private http: HttpClient) { }

  getLog(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getLogsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteLogs(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,
    {responseType: 'text'});
  }

  updateLogs(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  createLogs(logs: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, logs);
  }

  getDefaultReport():Observable<any>{
    return this.http.get(`${this.baseUrl+'?sort=date,asc&sort=odometerStart,asc'}`);
  }

  getSortByDate(date1: String, date2: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByDate/${date1}/${date2}`);
  }

  getSortByNameReport(ownerName: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByName/${ownerName}`);
  }

  getSortByRegNumber(regNumber: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByRegNumber/${regNumber}`);
  }

  getSortByNameAndRegNumber(ownerName: String,regNumber: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByNameRegNumber/${ownerName}/${regNumber}`);
  }

  getSortByNameAndDate(ownerName: String, date1: String, date2: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByNameDate/${ownerName}/${date1}/${date2}`);
  }

  getSortByRegNumberAndDate(regNumber: String, date1: String, date2: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByRegNumberDate/${regNumber}/${date1}/${date2}`);
  }
  getSortByNameRegNumberAndDate(ownerName: String,regNumber: String, date1: String, date2: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/filterByNameRegNumberDate/${ownerName}/${regNumber}/${date1}/${date2}`);
  }
}
