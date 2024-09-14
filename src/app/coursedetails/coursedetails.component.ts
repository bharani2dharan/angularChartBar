import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css',
  providers:[AppService]
})
export class CoursedetailsComponent {
  message: any;

  constructor(private myService: AppService) {
    this.message = this.myService.getMessage();
    console.log(this.message,"BHARANI")
  }
}
