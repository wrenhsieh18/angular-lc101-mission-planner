import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentList: string[] = [ 'Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks' ];

  equipmentBeingEdited = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(newItem: string) {
    if (this.equipmentList.includes(newItem)) {
      window.alert(`${newItem} is already in the list.`)
    } else {
      this.equipmentList.push(newItem);
    }
  }

  remove(targetItem: string) {
    this.equipmentList.splice(this.equipmentList.indexOf(targetItem),1);
  }

  editingEquipment(editedEquipmentName: string, equipmentBeingEditedNow: string) {
    if (editedEquipmentName === equipmentBeingEditedNow || !this.equipmentList.includes(editedEquipmentName)) {
      this.equipmentList.splice(this.equipmentList.indexOf(equipmentBeingEditedNow),1,editedEquipmentName);
      this.equipmentBeingEdited = null;
    } else {
      window.alert(`${editedEquipmentName} is already in the list.`)
    }
    
  }
}
