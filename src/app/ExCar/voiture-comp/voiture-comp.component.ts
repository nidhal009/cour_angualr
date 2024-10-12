import { Component, OnInit } from '@angular/core';
import { VoitureServiceService } from '../voiture-service.service';
import { Voiture } from '../voiture';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voiture-comp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './voiture-comp.component.html',
  styleUrl: './voiture-comp.component.css',
})
export class VoitureCompComponent implements OnInit {
  nums: string = '';
  verife:boolean=false;
  voiture: any;
  constructor(private serviceVoiture: VoitureServiceService) {}
  ngOnInit(): void {
    this.GetVoiture();
  }

  GetVoiture() {
    this.verife=false;
    this.voiture = this.serviceVoiture.getVoitures();
  }
  GetByMarque(marque: string) {
    this.verife=false;
    this.voiture = this.serviceVoiture.getVoituresByMarque(marque);
  }
  GetNombreVoiture(marque: string) {
    let n = this.serviceVoiture.getNbVoitures(marque);
    alert(n);
  }
  search() {
    this.voiture = this.serviceVoiture.getVoitureByNumSerie(this.nums);
    this.verife=true;
    
  }
}
