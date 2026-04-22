import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToolCatalog } from '../models/tool-catalog.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ToolCatalogService {
  private apiUrl = `${environment.apiUrl}/tool-catalog`;

  private toolsSubject = new BehaviorSubject<ToolCatalog[]>([]);
  public tools$: Observable<ToolCatalog[]> = this.toolsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshToolList();
  }

  public refreshToolList(): void {
    this.http.get<ToolCatalog[]>(this.apiUrl).subscribe(tools => this.toolsSubject.next(tools));
  }

  public getAll(): Observable<ToolCatalog[]> {
    return this.tools$;
  }

  public getById(id: number): Observable<ToolCatalog> {
    return this.http.get<ToolCatalog>(`${this.apiUrl}/${id}`);
  }

  public add(tool: Partial<ToolCatalog>): Observable<ToolCatalog> {
    return this.http.post<ToolCatalog>(this.apiUrl, tool).pipe(
      tap(() => this.refreshToolList())
    );
  }

  public update(id: number, tool: Partial<ToolCatalog>): Observable<ToolCatalog> {
    return this.http.patch<ToolCatalog>(`${this.apiUrl}/${id}`, tool).pipe(
      tap(() => this.refreshToolList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshToolList())
    );
  }

  public uploadPhoto(file: File): Observable<{ logoUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ logoUrl: string }>(`${this.apiUrl}/upload`, formData);
  }
}
