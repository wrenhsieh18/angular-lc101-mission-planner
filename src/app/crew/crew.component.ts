import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false, },
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  addToCrew(newMemberName: string, newMemberFirstMission: boolean) {
    let crewName = this.crew.map( (object)=> object['name']);
    if (crewName.includes(newMemberName)) {
      window.alert(`${newMemberName} is already in the crew list.`);
    } else {
      this.crew.push({name: newMemberName, firstMission: newMemberFirstMission});
    }
  }

  remove(removeMember: object) {
    this.crew.splice(this.crew.indexOf(removeMember),1)
  }

  editMember(editedMemberName: string, editedMemberFirstMission: boolean, memberBeingEditedNow: object) {
    let crewName = this.crew.map( (object)=> object['name']);
    // crewName.splice(crewName.indexOf(memberBeingEditedNow['name']),1);

    if (editedMemberName === memberBeingEditedNow['name'] || !crewName.includes(editedMemberName)) {
      memberBeingEditedNow['name'] = editedMemberName;
      memberBeingEditedNow['firstMission'] = editedMemberFirstMission;
      this.memberBeingEdited = null;
    } else {
      window.alert(`${editedMemberName} is already in the crew list.`);
    }
  }
}
