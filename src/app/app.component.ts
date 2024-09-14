import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ProgressdetailsComponent } from './progressdetails/progressdetails.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursedetailsComponent,ProgressdetailsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AppService]
})
export class AppComponent {
  title = 'interview';
}
