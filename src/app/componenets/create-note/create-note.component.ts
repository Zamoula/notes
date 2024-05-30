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

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    const formattedDate = `${day}-${month}-${year} ${hours}:${formattedMinutes}`;

    return formattedDate;
  }

  save(): void {
    let n = {
      id: this.notes.length + 1,
      title: this.title,
      content: this.content,
      creationDate: this.formatDate(new Date()),
      numberOfWords: this.content.split(" ").length
    }

    this.notes.push(n);
    this.service.setNotes('notes', this.notes);

    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
