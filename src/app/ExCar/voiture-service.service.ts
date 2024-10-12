import { Injectable } from '@angular/core';
import { Voiture } from './voiture';

@Injectable({
  providedIn: 'root',
})
export class VoitureServiceService {
  constructor() {}
  voitures: Voiture[] = [
    new Voiture('Ford', 'Fiesta', '141TU4930'),
    new Voiture('Renault', 'Clio', '125TU1111'),
    new Voiture('Ford', 'Fiesta', '128TU1587'),
    new Voiture('Renault', 'Clio', '141TU4444'),
    new Voiture('Ford', 'Focus', '158TU6987'),
    new Voiture('Renault', 'Clio', '201TU2222'),
  ];

  getVoitures() {
    return this.voitures;
  }
  getVoitureByNumSerie(numS: string) {
    let val:any=null
    this.voitures.forEach((v) => {
      if (v.numSerie == numS) {
        val= v;
      }
    });
     
    return val;
  }

  getVoituresByMarque(marque: string) {
    let tab:Voiture[]=[]
    for (let i = 0; i < this.voitures.length; i++) {
      if (this.voitures[i].marque == marque) {
         tab.push(this.voitures[i]);
      }
    }
    return tab;
  }
  getNbVoitures(modele: string) {
    let counter = 0;
    this.voitures.forEach((v) => {
      if (v.modele == modele) {
        counter++;
      }
    });
    return counter;
  }
}
