import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   //buttonColorChange: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addToCargoHold(itemNeeded: object) {
    if (this.canAdd(itemNeeded)) {
      this.cargoHold.push(itemNeeded);
      this.cargoMass = this.sumCargoMass(this.cargoHold);
    } 
   }

   sumCargoMass(actualCargoHold: object[]): number {
    let sum: number = 0;
    for (let item of actualCargoHold) {
      sum += item['mass'];
    }
    return sum;
   }

   canAdd(itemNeeded: object): boolean {
    if ((this.cargoMass+itemNeeded['mass']) <= this.maximumAllowedMass && this.cargoHold.length+1 <= 10 && this.countItemInArray(itemNeeded) < 2) {
      return true;
    } else {
      return false;
    }
   }

   countItemInArray(item: object): number {
    let qt = 0; 
    for (let cargo of this.cargoHold) {
      if (item === cargo) {
        qt += 1;
      }
    }
    return qt;
   }

   buttonColorChange() {
     let ifAllCanAddArr = this.equipmentItems.map( (item) => {return this.canAdd(item)} );
     console.log(ifAllCanAddArr);
     if (ifAllCanAddArr.includes(false)) {
       return true;
     } else {
       return false;
     }
   }

   emptyHold() {
     this.cargoHold = [];
     this.cargoMass = 0;
   }

   removeSpecificItem(item: object) {
    this.cargoHold.splice(this.cargoHold.indexOf(item),1);
    this.cargoMass -= item['mass'];
   }
   
}
