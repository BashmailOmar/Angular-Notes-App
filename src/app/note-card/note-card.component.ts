import { Component, Input } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  constructor(private notesDataService: RestapiService) {

  }
  @Input() id: String | undefined;
  @Input() title: String | undefined;
  @Input() content: String | undefined;
  OnClickDelete() {
    this.notesDataService.deleteNote(this.id).subscribe(() => {
      console.log(this.id);
    })
  }
}
