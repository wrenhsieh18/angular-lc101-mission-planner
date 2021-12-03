import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   plannedExperiments: string[] = [];
   maxExperiments: number = 5;

   constructor() { }

   ngOnInit() { }

   canAdd(experiment: string, experimentList: string[]): boolean {
    if (!experimentList.includes(experiment) && this.plannedExperiments.length < this.maxExperiments) {
      return true;
    } else {
      return false;
    }
   }

   addToPlan(experiment: string): void {
     if (this.canAdd(experiment, this.plannedExperiments) && this.plannedExperiments.length < this.maxExperiments) {
      this.plannedExperiments.push(experiment);
     }
   }

   addNewExperiment(newExperiment: string): void {
    if (this.canAdd(newExperiment, this.experiments)) {
      this.experiments.push(newExperiment);
    }
   }

}
