import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssessmentComponent } from './assessment/assessment.component';
@Component({
  selector: 'app-progressdetails',
  standalone: true,
  imports: [CommonModule,NgChartsModule,AttendanceComponent,AssessmentComponent],
  templateUrl: './progressdetails.component.html',
  styleUrl: './progressdetails.component.css',
  providers:[AppService]
})
export class ProgressdetailsComponent {

}
