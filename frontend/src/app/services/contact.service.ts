import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactInquiry } from '../models/contact-inquiry.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  submitContact(inquiry: ContactInquiry): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, inquiry);
  }
}