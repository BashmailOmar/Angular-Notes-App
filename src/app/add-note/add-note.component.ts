import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  constructor(private notesDataService: RestapiService) {
}

  addNotesFormData(data: any) {
    this.notesDataService.createNote(data).subscribe((response: any) => {
      console.log(response);
    });
  }

}
