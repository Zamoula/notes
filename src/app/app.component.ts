import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './custom_modules/material.module';
import { CommonModule } from '@angular/common';

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

  // Define the data array containing phone names, heights, and widths
  phones = [
    { name: 'iPhone 14 Pro Max', height: 652.4, width: 301 },
    { name: 'Samsung Galaxy S21', height: 560, width: 252 },
    { name: 'Google Pixel 6', height: 640.5, width: 288.4 },
    { name: 'OnePlus 9 Pro', height: 643.3, width: 288.4 }
  ];

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
  }
}
