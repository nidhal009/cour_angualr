import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personnage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personnage.component.html',
  styleUrl: './personnage.component.css'
})
export class PersonnageComponent {
  tabPersonnages = [
    {nom:'Donald',image:'assets/donald.png', nb:44, majeur:true},
    {nom:'Popey',image:'assets/popey.jpg', nb:16, majeur:true},
    {nom:'Sam',image:'assets/happy.jpg', nb:14, majeur:false }
    ];


    plus(i:number){
      this.tabPersonnages[i].nb++;
    }
    total(){
      let n=0;
      for (let i=0;i<this.tabPersonnages.length;i++){
            if(this.tabPersonnages[i].majeur==true){
              n++;
            }
      }
      return n;
      
    }
}
