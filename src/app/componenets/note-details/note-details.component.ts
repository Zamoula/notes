import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { Note } from '../../models/note';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.css'
})
export class NoteDetailsComponent implements OnInit{
  notes: Note[] = [];
  note: any = null;
  isEditing: boolean = false;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private service: StorageService
    ) {}

  ngOnInit(): void {
    this.notes = this.service.getNotes('notes') || [];

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.note = this.notes.filter(n => n.id === id)[0];
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteConfirmDialogComponent, {
      data: this.note.id,
      width: '100px',
      height: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
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
