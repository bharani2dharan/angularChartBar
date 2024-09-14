import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
 // Define the chart options
 public lineChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: true
      },
      title: {
        display: true,
        text: 'Weeks', // Label for the x-axis
        font: {
          size: 12 // Font size for the x-axis label
        }
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false
      }, 
      min:0,
      ticks: {
        stepSize: 25, // Specifies intervals between ticks on the Y-axis
        callback: function (value) {
          return value + '%'; // Append % to the value
        }
      },
      title: {
        display: true,
        text: 'Attendance', // Label for the x-axis
        font: {
          size: 12 // Font size for the x-axis label
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  }
};

// Define the chart data
public lineChartData: ChartData<'line'> = {
  labels: ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8','19/8','26/8','2/9','9/9'],
  datasets: [
    {
      label: 'Attendance',
      data: [25, 55, 20, 80, 50, 55, 75,50,90,80,29], // Example data
      borderColor: '#ECBFFF', // Line color
      backgroundColor: 'transparent', // Fill color
      fill: true, // Whether to fill the area under the line
      tension: 0.1, // Curvature of the line
      pointBorderColor: 'rgb(48, 25, 52)', // Dot border color
      pointBackgroundColor: 'rgb(48, 25, 52)', // Dot fill color
      pointHoverBorderColor: 'rgb(48, 25, 52)', // Dot border color on hover
      borderWidth: 2, // Line thickness
    }
  ]
};

// Define the chart type
public lineChartType: 'line' = 'line'; // Correctly specify 'line'

}
