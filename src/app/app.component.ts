import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './custom_modules/material.module';
import { CommonModule } from '@angular/common';
import { phones } from './models/phone.data';
import { dm } from './models/dimensions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  phone_name: string = '';
  divHeight: number = 0;
  divWidth: number = 0;

  // Import the data array containing phone names, heights, and widths
  phones = phones;

  ngOnInit(): void {
    // initially selected phone
    this.phone_name = this.phones[0].name;
    this.divHeight = this.phones[0].height;
    this.divWidth = this.phones[0].width;
  }

  // Method to set the selected phone dimensions
  setPhoneDimensions(phone:any) {
    this.phone_name = phone.name;
    this.divHeight = phone.height;
    this.divWidth = phone.width;
    dm.height = phone.height;
    dm.width = phone.width;
  }
}
