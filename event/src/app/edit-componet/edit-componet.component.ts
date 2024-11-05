import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-componet',
  templateUrl: './edit-componet.component.html',
  styleUrls: ['./edit-componet.component.css']
})

export class EditComponetComponent {

  eventForm: FormGroup;
 


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) 
  
  {
    this.eventForm = this.fb.group({
      id:[this.route.snapshot.paramMap.get('id')],
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],

    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
   
    if (this.eventForm.valid) {
      this.http.put(`https://localhost:44351/api/event/`, this.eventForm.value)
        .subscribe(() => {
          alert('Event edit successfully!');
          this.router.navigate(['/home']); // Redirect after saving
        });
    }
    
  }
  onCancel(){
    this.router.navigate(['/home']);
  }
}