import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ListComponent } from "./list/list.component";
import { FooterComponent } from "./footer/footer.component";
import { TestComponent } from "./test/test.component";
import { FormsModule } from '@angular/forms';
import { TelephoneComponent } from "./telephone/telephone.component";
import { PersonnageComponent } from "./personnage/personnage.component";
import { ListMatrielComponent } from "./list-matriel/list-matriel.component";
import { ListpersonnesComponent } from "./listpersonnes/listpersonnes.component";
import { ListPizzaComponent } from "./list-pizza/list-pizza.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, ListComponent, FooterComponent, TestComponent, FormsModule, TelephoneComponent, PersonnageComponent, ListMatrielComponent, ListpersonnesComponent, ListPizzaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonProjet';
}
