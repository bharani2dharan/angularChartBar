import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getMessage() {
    return this.courseDetails;
  }

  courseDetails:any = [
    {
        heading:"Course Code",
        content:"BA3102",
        type:1
    },
    {
        heading:"Course Name",
        content:"Quantitative techniques",
        type:1
    },
    {
        heading:"Course Type",  
        content:"Program Elective",
        type:1
    },
    {
        heading:"Credits (4)",  
        typeOfCredits:[
            {
                type:"Lecture",
                score:3
            },
            {
                type:"Tutorial",
                score:0
            },{
                type:"Practical",
                score:1
            },{
                type:"Project",
                score:0
            },
        ],
        type:2
    },
    {
        heading:"Course Outcomes (COs)",  
        allOutcomes:[
            'CO2','CO4','CO5','CO7','CO13'
        ],
        type:3,
        colorType:1
    },
    {
        heading:"Mapped to this course",  
        allOutcomes:[
            'PO7','PO4','PO5','PO7','PO13'
        ],
        type:3,
        colorType:2
    },
  ]
}