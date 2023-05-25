import { Component, EventEmitter, Output } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  @Output() note = new EventEmitter<any>();

  constructor(private notesDataService: RestapiService) {
  }
  title: String = "";
  content: String = "";

  addNotesFormData(data: any) {
    if (this.title == "" || this.content == "") {

    } else {
      this.notesDataService.createNote(data).subscribe((response: any) => {
        if (response.id) {
          this.note.emit(response);
        }
      });
      this.title = this.content = "";
    }
  }
}
