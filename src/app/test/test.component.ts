import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  titre: string = 'heloo';
  name: string = 'walid';
  age: number = 24;
  isactif: boolean = false;
  afficher() {
    return this.name + ' ' + this.age;
  }
  sayheloo() {
    alert('heloo');
  }
  onAfficher(st: string) {
    alert(st);
  }

  val: string = '';
  profil:string="Admin"

  style="italic";
getColor(){return "red";}
}
