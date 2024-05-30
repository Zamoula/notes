import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Note } from '../../models/note';
import { dm } from '../../models/dimensions';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit{
  notes: Note[] = [];
  d:any = dm;

  constructor(
    private router:Router,
    private service:StorageService
    ) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.service.getNotes('notes') || [];
  }

  goToNew(){
    this.router.navigate(['new']);
  }

  goToNote(id:any){
    this.router.navigate(['/',id]);
  }
}
