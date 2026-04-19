import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ServiceCatalog, ServiceCatalogApiResponse } from '../models/service-catalog.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceCatalogService {
  private apiUrl = `${environment.apiUrl}/service-catalog`;

  private servicesSubject = new BehaviorSubject<ServiceCatalog[]>([]);
  public services$: Observable<ServiceCatalog[]> = this.servicesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshServiceList();
  }

  public refreshServiceList(): void {
    this.http.get<ServiceCatalog[]>(this.apiUrl).subscribe(services => this.servicesSubject.next(services));
  }

  public getAll(): Observable<ServiceCatalog[]> {
    return this.services$;
  }

  public getById(id: number): Observable<ServiceCatalog> {
    return this.http.get<ServiceCatalog>(`${this.apiUrl}/${id}`);
  }

  public add(service: Partial<ServiceCatalog>): Observable<ServiceCatalog> {
    return this.http.post<ServiceCatalog>(this.apiUrl, service).pipe(
      tap(() => this.refreshServiceList())
    );
  }

  public update(id: number, service: Partial<ServiceCatalog>): Observable<ServiceCatalog> {
    return this.http.patch<ServiceCatalog>(`${this.apiUrl}/${id}`, service).pipe(
      tap(() => this.refreshServiceList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshServiceList())
    );
  }

  public uploadPhoto(file: File): Observable<{ logoUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    // Note: Reusing the same endpoint logic as brand for consistency if available
    return this.http.post<{ logoUrl: string }>(`${this.apiUrl}/upload`, formData);
  }
}
