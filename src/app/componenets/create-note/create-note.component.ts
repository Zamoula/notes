import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../custom_modules/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  constructor(private router:Router) {}

  goToHome(){
    this.router.navigate(['']);
  }
}
