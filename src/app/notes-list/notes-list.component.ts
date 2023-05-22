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
    this.Getallnotes();
  }
  
  notesdata: any;

  Getallnotes() {
    this.service.GetAllNotes().subscribe((response: any) => {
      this.notesdata = response;
      console.log(this.notesdata);
    });
  }

}
