import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.getNotesMethod();
    this.postNoteMethod("1", "qwer", "")

  }

  getnotesdata: any;
  postnotesdata: any;

  getNotesMethod() {
    this.service.getNotes().subscribe((response: any) => {
      this.getnotesdata = response;
      console.log(this.getnotesdata);
    });
  }

  postNoteMethod(id: string, title: string, content: string) {
    let body = {
      id, title, content
    }
    this.service.createNote(body).subscribe((response: any) => {
      this.postnotesdata = response;
      console.log(this.postnotesdata);
    });
  }

}
