import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent {
  isCancel: boolean = false;
  constructor(private notesDataService: RestapiService, @Inject(MAT_DIALOG_DATA) public injectedData: any, private dialogRef: MatDialogRef<EditPopUpComponent>) {

  }

  editNotesFormData(data: any) {
    data.id = this.injectedData.id;
    this.notesDataService.updateNote(data).subscribe((response: any) => {
      console.log(response.id);
      this.dialogRef.close({data:this.isCancel});
    });
  }

  closeEditDialog() {
    this.isCancel = true;
  }



}
