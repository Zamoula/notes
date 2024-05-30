import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { notes } from '../../mock_data/notes.data';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent implements OnInit{
  notes = notes;
  note: any = null;
  isEditing: boolean = false;

  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.note = this.notes.filter(n => n.id === id)[0];
    });
  }
  save() {}

  goToHome(){
    this.router.navigate(['']);
  }

  enableEditing() {
    this.isEditing = true;
  }

  disableEditing() {
    this.save();
    this.isEditing = false;
  }
}
