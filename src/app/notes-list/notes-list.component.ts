import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  constructor(private notesDataService: RestapiService) {
        this.getNotesMethod();
  }

  ngOnInit(): void {
    // this.getNotesMethod();
  }

  notesdata: any;
  postnotesdata: any;

  getNotesMethod() {
    this.notesDataService.getNotes().subscribe((response: any) => {
      this.notesdata = response;
    });
  }

}
