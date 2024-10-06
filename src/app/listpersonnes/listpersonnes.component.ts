import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonneComponent } from "../personne/personne.component";
import { Personne } from '../personne';

@Component({
  selector: 'app-listpersonnes',
  standalone: true,
  imports: [CommonModule, PersonneComponent],
  templateUrl: './listpersonnes.component.html',
  styleUrl: './listpersonnes.component.css'
})
export class ListpersonnesComponent {
  personnes:Personne[] = [
    new Personne('Ali MBARKI', 21,true),
    new Personne('Amira SMIRI', 32, false),
    new Personne('Rania MEDDEB', 19, true),
    new Personne('Sami TLILI',52, false)   
    ]
   
}
