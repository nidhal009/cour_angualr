import { Component } from '@angular/core';
import { Pizza } from '../MesClass/pizza';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from "../pizza/pizza.component";
import { Commentaire } from '../MesClass/commentaire';

@Component({
  selector: 'app-list-pizza',
  standalone: true,
  imports: [CommonModule, PizzaComponent],
  templateUrl: './list-pizza.component.html',
  styleUrl: './list-pizza.component.css'
})
export class ListPizzaComponent {
  lespizzas: Pizza[] = [
    new Pizza("Neptune", "assets/neptune.jpg", 8.7, true,
    [
    new Commentaire("Ahmed", new Date(2021,10,11),"Moyenne"),
    new Commentaire("Sarra", new Date(2021,10,12),"Superbe")
    ] ),
    new Pizza("4 Saisons", "assets/saisons.jpg", 8.2, false,
    [
    new Commentaire("Aziz", new Date(2021,10,12),"Je recommande vivement"),
    new Commentaire("Cyrine", new Date(2021,10,13),"Excellente pizza")
    ]),
    new Pizza("Fruits de Mer", "assets/mer.jpg", 11.2, true,
    [new Commentaire("Mondher", new Date(2021,11,15),"Trop chère!")]),

    new Pizza("Marguerite", "assets/marguerite.jpg", 7.5, true,
    [
    new Commentaire("Nour El Houda", new Date(2021,10,11),"Pas géniale"),
    new Commentaire("Oussema", new Date(2021,10,15),"Extra")
    ])
    ];
   
   
}
