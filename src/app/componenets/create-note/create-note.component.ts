import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../custom_modules/material.module';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent implements OnInit{
  notes: Note[] = [];
  title: string = '';
  content: string = '';

  constructor(
    private router:Router,
    private service:StorageService
    ) {}

  ngOnInit(): void {
    this.notes = this.service.getNotes('notes') || [];
  }

  save(): void {
    let n = {
      id: this.notes.length + 1,
      title: this.title,
      content: this.content,
      creationDate: new Date(),
      numberOfWords: this.content.split(" ").length + 1
    }

    this.notes.push(n);
    this.service.setNotes('notes', this.notes);

    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
