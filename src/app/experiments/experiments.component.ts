import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentList: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  experimentBeingEdited = null;

  constructor() { }

  ngOnInit() {
  }

  addToList(addedExperiment: string) {
    if (!this.experimentList.includes(addedExperiment)) {
      this.experimentList.push(addedExperiment);
    } else {
      window.alert(`${addedExperiment} is already in the list.`)
    }
  }

  remove(removedItem: string) {
    this.experimentList.splice(this.experimentList.indexOf(removedItem),1);
  }

  experimentEditor(experimentEdited: string, experimentBeingEditedNow: string) {
    if (experimentEdited === experimentBeingEditedNow || !this.experimentList.includes(experimentEdited)) {
      this.experimentList[this.experimentList.indexOf(experimentBeingEditedNow)] = experimentEdited;
      this.experimentBeingEdited = null;
    } else {
      window.alert(`${experimentEdited} is already in the list.`)
    }
  }
}
