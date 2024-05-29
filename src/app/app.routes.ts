import { Routes } from '@angular/router';
import { NotesListComponent } from './componenets/notes-list/notes-list.component';
import { CreateNoteComponent } from './componenets/create-note/create-note.component';
import { NoteDetailsComponent } from './componenets/note-details/note-details.component';
import { PageNotFoundComponent } from './componenets/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: NotesListComponent
    },
    {
        path: 'new',
        component: CreateNoteComponent
    },
    {
        path: ':id',
        component: NoteDetailsComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
