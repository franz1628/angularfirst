import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { DocumentType, DocumentTypeApiResponse } from '../models/document-type.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DocumentTypeService {
  private apiUrl = `${environment.apiUrl}/document-type`;
  
  private documentTypesSubject = new BehaviorSubject<DocumentType[]>([]);
  public documentTypes$: Observable<DocumentType[]> = this.documentTypesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshDocumentTypeList();
  }

  public refreshDocumentTypeList(): void {
    this.http.get<DocumentTypeApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    ).subscribe(documentTypes => this.documentTypesSubject.next(documentTypes));
  }

  public getAll(): Observable<DocumentType[]> {
    return this.documentTypes$;
  }

  public getById(id: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.apiUrl}/${id}`);
  }

  public add(documentType: Partial<DocumentType>): Observable<DocumentType> {
    return this.http.post<DocumentType>(this.apiUrl, documentType).pipe(
      tap(() => this.refreshDocumentTypeList())
    );
  }

  public update(id: number, documentType: Partial<DocumentType>): Observable<DocumentType> {
    return this.http.patch<DocumentType>(`${this.apiUrl}/${id}`, documentType).pipe(
      tap(() => this.refreshDocumentTypeList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshDocumentTypeList())
    );
  }
}
