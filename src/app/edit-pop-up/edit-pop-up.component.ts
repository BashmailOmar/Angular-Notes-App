import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent {
  id: String | "";
  title: String = "";
  content: String = "";

  constructor(private notesDataService: RestapiService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditPopUpComponent>) {
    this.title = data.title;
    this.content = data.content;
    this.id = data.id;
  }

  CloseEditDialog() {
    this.dialogRef.close();
  } 

  editNotesFormData(data: any) {//here it display nondefiend data! I will check this after I go home.
    console.log(data.id)
    // this.notesDataService.updateNote(data).subscribe((response: any) => {
    //   console.log(response.id)
    //  })
  }

}
