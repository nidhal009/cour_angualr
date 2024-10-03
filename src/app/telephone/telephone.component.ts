import { Component } from '@angular/core';

@Component({
  selector: 'app-telephone',
  standalone: true,
  imports: [],
  templateUrl: './telephone.component.html',
  styleUrl: './telephone.component.css',
})
export class TelephoneComponent {
  telephone = {
    marque: 'Huawei',
    modele: 'Y5 Prime',
    photo: 'assets/huawei.jpg',
    prix: 450,
  };
  isBas() {
    return this.telephone.prix < 700;
  }
  show() {
    alert (
      this.telephone.marque +
      ' ' +
      this.telephone.modele +
      ' ' +
      this.telephone.prix+"dt"
    );
  }
}
