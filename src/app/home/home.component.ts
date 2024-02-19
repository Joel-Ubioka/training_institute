import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counters = [
    { title: 'Happy Clients', target: 670, currentValue: 0, backgroundImage: 'path/to/image1.jpg' },
    { title: 'Projects Completed', target: 230, currentValue: 0, backgroundImage: 'path/to/image2.jpg' },
    { title: 'Support Hours', target: 24, currentValue: 0, backgroundImage: 'path/to/image3.jpg' },
    { title: 'Students Graduated', target: 2150, currentValue: 0, backgroundImage: 'path/to/image4.jpg' }
  ];

  
}
