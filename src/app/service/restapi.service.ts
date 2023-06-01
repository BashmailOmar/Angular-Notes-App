import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class RestapiService {
  url = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  createNote(data: any) {
    return this.http.post(this.url, data);
  }

  getNotes() {
    return this.http.get(this.url);
  }

  deleteNote(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateNote(data: any) {
    return this.http.put(`${this.url}/${data.id}`, data);
  }
}




