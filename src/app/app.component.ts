import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  candidateList:any = [
    'Abhinav',
    'Rasika',
    'Abhay',
    'Rajesh',
    'Suresh',
    'Vijay',
    'Peter',
    'jenny',
    'tony',
    'Shital',
    'Raju',
    'Shyam',
    'Sahil'

  ];


  doseNo1:any = [];
  doseNo2:any = [];
  boosterDose :any = [];

  dose1(i:any){
this.doseNo1.push(this.candidateList[i])
this.candidateList.splice(i,1)

  }

  delete(i:any){
    this.candidateList.splice(i,1)
  }
  dose2(i:any){
    this.doseNo2.push(this.doseNo1[i])
this.doseNo1.splice(i,1)
  }

  bDose(i:any){
    this.boosterDose.push(this.doseNo2[i])
    this.doseNo2.splice(i,1)
  }

  undoD1(i:any){
this.candidateList.push(this.doseNo1[i])
this.doseNo1.splice(i,1)
  }

  undoD2(i:any){
    this.doseNo1.push(this.doseNo2[i])
    this.doseNo2.splice(i,1)
  }

  undoD3(i:any){
    this.doseNo2.push(this.boosterDose[i])
    this.boosterDose.splice(i,1)
  }
}
