import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  constructor(private http: HttpClient) { }

  GetAllNotes(): any {
    return this.http.get("http://localhost:3000/notes");
  }

}
