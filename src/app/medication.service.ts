import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:5001/api/medications';

  constructor(private http: HttpClient) {}

  getMedications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMedication(medication: any): Observable<any> {
    
    return this.http.post<any>(this.apiUrl, medication);
  }

  updateMedication(medication: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${medication.id}`, medication);
  }

  deleteMedication(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
