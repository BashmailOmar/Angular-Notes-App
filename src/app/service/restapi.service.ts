import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  constructor(private http: HttpClient) { }

  createNote(postBody: any): any {
    const header= new HttpHeaders({
      contentType: 'application/json'
    })
    this.http.post("http://localhost:3000/notes", postBody, {headers: header});
  }

  getNotes(){
    return this.http.get("http://localhost:3000/notes");
  }
}




