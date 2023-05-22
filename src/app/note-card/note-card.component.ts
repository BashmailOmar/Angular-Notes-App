import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent{
@Input() title : String | undefined;
@Input() content : String | undefined;
}
