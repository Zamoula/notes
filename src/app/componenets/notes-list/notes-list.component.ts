import { Component } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';
import { Router } from '@angular/router';
import { notes } from '../../mock_data/notes.data';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
   notes = notes;

  constructor(private router:Router) {}

  goToNew(){
    this.router.navigate(['new']);
  }

  goToNote(id:any){
    this.router.navigate(['/',id]);
  }
}
