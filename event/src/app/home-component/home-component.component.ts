import { Component } from '@angular/core';
import { eventModal } from '../modal';
import { EventServiceService } from '../event-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  
    title = "Event Management";
    event: eventModal[] = [];
    eventToEdit?: eventModal;
allEvents: any;
  
    constructor(private eventservice: EventServiceService,
      private route: Router,
      private http: HttpClient

    ) {}
  
    ngOnInit(): void {
  
      this.loadEvents(); 
    }
    loadEvents(): void {
    
      this.eventservice.getAllEvents()
        .subscribe(
          (result: eventModal[]) => {
            this.event = result; // Assign the result to the events variable
          },
          (error) => {
            console.error('Failed to load events', error); // Handle the error appropriately
          }
        );
    }
    updateHeroList(heroes: eventModal[]) {
      this.event = heroes;
    }
  
    newEvent() {
      this.eventToEdit = new eventModal(); // Initialize a new eventModal instance
      // Navigate to the AddComponent
     
      this.route.navigate(['/add']); // Ensure 'add' corresponds to the route defined for AddComponent
    }
    fetchEvents() {
    
      this.eventservice
        .getAllEvents()
        .subscribe((result: eventModal[]) => (this.event = result));
    }
  
    editEvent(event: eventModal) {
      this.route.navigate(['/edit', event.id]); 
    }
  
    deleteEvent(event: eventModal) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.http.delete(`https://localhost:44351/api/event/${event.id}`)
          .subscribe(() => {
            this.fetchEvents();
            alert('Event deleted successfully!'); 
          });
      }
  }
}
