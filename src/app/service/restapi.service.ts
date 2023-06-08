import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestapiService {
  url = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  createNote(data: any) {
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(
        (error) => {
          console.log(error);
          return throwError('Error');
        }
      )
    );
  }

  getNotes() {
    return this.http.get(this.url).pipe(
      catchError(
        (error) => {
          console.log(error);
          return throwError('Error');
        }
      )
    );
  }

  deleteNote(id: any) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(
        (error) => {
          console.log(error);
          return throwError('Error');
        }
      )
    );
  }

  updateNote(data: any) {
    return this.http.put(`${this.url}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(
        (error) => {
          console.log(error);
          return throwError('Error');
        }
      )
    );
  }
}




