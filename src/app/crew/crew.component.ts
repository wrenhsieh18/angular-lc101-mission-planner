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
    this.crew.push({name: newMemberName, firstMission: newMemberFirstMission});
  }

  remove(removeMember: object) {
    this.crew.splice(this.crew.indexOf(removeMember),1)
  }

  editMember(editedMemberName: string, editedMemberFirstMission: boolean, editedMember: object) {
    editedMember['name'] = editedMemberName;
    editedMember['firstMission'] = editedMemberFirstMission;
    this.memberBeingEdited = null;
  }
}
