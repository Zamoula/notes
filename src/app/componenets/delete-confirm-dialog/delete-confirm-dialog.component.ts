import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';
import { StorageService } from '../../services/storage.service';
import { Note } from '../../models/note';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrl: './delete-confirm-dialog.component.css'
})
export class DeleteConfirmDialogComponent implements OnInit{
  notes: Note[] = [];

  constructor(
    private service: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.notes = this.service.getNotes('notes') || [];
  }

  delete() {
    this.notes = this.notes.filter(n => n.id !== this.data);
    this.service.setNotes('notes', this.notes);

    this.router.navigate(['']);
  }
}
