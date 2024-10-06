import { Component ,Input} from '@angular/core';
import { Pizza } from '../MesClass/pizza';
import { CommonModule } from '@angular/common';
import { Commentaire } from '../MesClass/commentaire';
import { CommentComponentComponent } from "../comment-component/comment-component.component";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule, CommentComponentComponent],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
  show:boolean=false;
@Input()pizza:Pizza=new Pizza("","",0,false, [new Commentaire("", new Date(),"")]);
ShowComment(){
this.show=!this.show

}
}
