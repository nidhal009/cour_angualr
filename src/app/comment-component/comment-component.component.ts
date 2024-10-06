import { Component, Input } from '@angular/core';
import { Commentaire } from '../MesClass/commentaire';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-component.component.html',
  styleUrl: './comment-component.component.css'
})
export class CommentComponentComponent {
@Input()comm:Commentaire=new Commentaire("",new Date(),"")
}
