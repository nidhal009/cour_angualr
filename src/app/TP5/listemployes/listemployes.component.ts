import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { CommonModule } from '@angular/common';
import { Employe } from '../employe';

@Component({
  selector: 'app-listemployes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listemployes.component.html',
  styleUrl: './listemployes.component.css'
})
export class ListemployesComponent implements OnInit{
  tabEmploye:Employe[]=[];

  constructor(private empolyeservice:EmployeService ){}

  ngOnInit(): void {
   this.GetEmploye();
  }
  GetEmploye(){
    this.tabEmploye=this.empolyeservice.getEmploye()
  }
  DeleteFirstPersone(){
    this.empolyeservice.DeleteFirstEmploye()
  }


}
