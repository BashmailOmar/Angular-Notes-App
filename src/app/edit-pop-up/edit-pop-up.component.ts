import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent {
  id: String | undefined;
  title: String = "";
  content: String = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title,
      this.content = data.content
  }
  editNotesFormData(data: any) {
    if (this.title == "" || this.content == "") {

    } else {

      this.title = this.content = "";
    }
  }
}
