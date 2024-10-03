import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-matriel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-matriel.component.html',
  styleUrl: './list-matriel.component.css',
})
export class ListMatrielComponent {
  materiels = [
    {
      nom: 'Scanner',
      reference: 'e7f8',
      image: 'assets/scanner.jpg',
      prix: 253.45,
      etat: 'réparé',
    },
    {
      nom: 'Ecran',
      reference: 'ec18',
      image: 'assets/ecrans.png',
      prix: 403.5,
      etat: 'endommagé',
    },
    {
      nom: 'Imprimante',
      reference: 'imp88',
      image: 'assets/imprimantes.jpg',
      prix: 189.5,
      etat: 'endommagé',
    },
    {
      nom: 'Pc Portable',
      reference: 'hp58',
      image: 'assets/pcPortables.png',
      prix: 1512.8,
      etat: 'réparé',
    },
  ];
  repare(i: number) {
    this.materiels[i].etat = 'réparé';
  }
}
