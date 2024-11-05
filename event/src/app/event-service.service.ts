import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { eventModal } from './modal';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private url = 'event';

  constructor(private http: HttpClient) { }
    public getAllEvents(): Observable<eventModal[]> {
      debugger
      return this.http.get<eventModal[]>(`${environment.apiUrl}/${this.url}`);
    }
  
   
  
    
  
}

