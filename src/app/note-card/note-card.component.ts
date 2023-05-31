import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Output() deletedNote = new EventEmitter<any>();
  constructor(private notesDataService: RestapiService, private dialogRef: MatDialog) { }

  @Input() id: String | undefined;
  @Input() title: String | undefined;
  @Input() content: String | undefined;

  OpenEditDialog() {
    this.dialogRef.open(EditPopUpComponent, {
      data: {
        "title": this.title,
        "content": this.content,
        "id": this.id
      }
    });
  }
  OnClickDelete() {
    this.notesDataService.deleteNote(this.id).subscribe(() => {
      console.log(this.id);
      this.deletedNote.emit();
    })
  }
}
