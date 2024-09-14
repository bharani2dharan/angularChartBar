import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent {
   // Define the chart options
   public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales:{
      x:{
        beginAtZero: true,
        grid: {
          display: false
        },
      },
      y:{
        beginAtZero: true,
        min:0,
        grid: {
          display: true
        },
        ticks: {
          stepSize: 25, // Specifies intervals between ticks on the Y-axis
          callback: function (value) {
            return value + '%'; // Append % to the value
          }
        },
      }
    }
  };

  // Define the chart data type
  public barChartData: ChartData<'bar'> = {
    labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
    datasets: [
      { data: [75, 85, 86, 81, 40], label: 'Completed' ,backgroundColor: 'rgb(128, 151, 93)',hoverBackgroundColor:'rgb(128, 151, 93)' },
      { data: [28, 48, 100, 19, 100], label: 'Pending' ,backgroundColor: '#C5C5C5',hoverBackgroundColor:'#C5C5C5' }
    ]
  };

  // Define the chart type
  public barChartType: ChartType = 'bar';

   
}
