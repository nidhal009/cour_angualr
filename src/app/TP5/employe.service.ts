import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  listEmployes: Employe[] = [
    new Employe(1234, "Amine SALAH","Ingénieur" ),
    new Employe(5847, "Mouna MOALLA","Directeur" ),
    new Employe(5812, "Mourad SMIDA","Comptable" ),
    new Employe(9641, "Samar FENINA","Directeur" )
    ]
    getEmploye(){
      return this.listEmployes;
    }
    DeleteFirstEmploye(){
      return this.listEmployes.shift();
    }


  constructor() { }
}
