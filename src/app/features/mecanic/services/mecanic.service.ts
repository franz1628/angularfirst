import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Mecanic, MecanicApiResponse } from '../models/mecanic.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MecanicService {
  private apiUrl = `${environment.apiUrl}/mecanic`;
  
  private mecanicSubject = new BehaviorSubject<Mecanic[]>([]);
  public mechanics$: Observable<Mecanic[]> = this.mecanicSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshMecanicList();
  }

  public refreshMecanicList(): void {
    this.http.get<MecanicApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    ).subscribe(mechanics => this.mecanicSubject.next(mechanics));
  }

  public getAll(): Observable<Mecanic[]> {
    return this.mechanics$;
  }

  public getById(id: number): Observable<Mecanic> {
    return this.http.get<Mecanic>(`${this.apiUrl}/${id}`);
  }

  public add(mecanic: Partial<Mecanic>): Observable<Mecanic> {
    return this.http.post<Mecanic>(this.apiUrl, mecanic).pipe(
      tap(() => this.refreshMecanicList())
    );
  }

  public update(id: number, mecanic: Partial<Mecanic>): Observable<Mecanic> {
    return this.http.patch<Mecanic>(`${this.apiUrl}/${id}`, mecanic).pipe(
      tap(() => this.refreshMecanicList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshMecanicList())
    );
  }
}
