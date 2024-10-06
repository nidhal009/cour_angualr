import { Component ,Input} from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne',
  standalone: true,
  imports: [],
  templateUrl: './personne.component.html',
  styleUrl: './personne.component.css'
})
export class PersonneComponent {
 @Input()pers:Personne=new Personne("",0,false);


}
