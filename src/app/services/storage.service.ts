import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  // Get array of notes from localStorage
  getNotes(key: string): Note[] {
    const notesString = localStorage.getItem(key);
    return notesString ? JSON.parse(notesString) : [];
  }

  // Set array of notes in localStorage
  setNotes(key: string, notes: Note[]): void {
    localStorage.setItem(key, JSON.stringify(notes));
  }

  // Clear notes from localStorage
  clearNotes(key: string): void {
    localStorage.removeItem(key);
  }
/*
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  } */
}