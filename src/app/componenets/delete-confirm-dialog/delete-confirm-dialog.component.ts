import { Component } from '@angular/core';
import { MaterialModule } from '../../custom_modules/material.module';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrl: './delete-confirm-dialog.component.css'
})
export class DeleteConfirmDialogComponent {

}
