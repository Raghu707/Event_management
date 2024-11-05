import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { eventModal } from '../modal';
import { EventServiceService } from '../event-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router,) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      date: ['', Validators.required],
      location: ['', [Validators.required]],
      
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value; // Capture form values
      this.sendData(formData); // Send data to the server
    }
  }

  sendData(data: any) {
    const url = 'https://localhost:44351/api/event'; // Replace with your API endpoint
    this.http.post(url, data).subscribe(
      response => {
        console.log('Success:', response);
        alert('Event added successfully!');
        this.route.navigate(['/home']);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  onCancel(){
    this.route.navigate(['/home']);
  }
}