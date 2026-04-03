import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Brand, BrandApiResponse } from '../models/brand.model';

@Injectable({ providedIn: 'root' })
export class BrandService {
  private apiUrl = 'http://localhost:3000/brand';
  
  private brandsSubject = new BehaviorSubject<Brand[]>([]);
  public brands$: Observable<Brand[]> = this.brandsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshBrandList();
  }

  public refreshBrandList(): void {
    this.http.get<BrandApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    ).subscribe(brands => this.brandsSubject.next(brands));
  }

  public getAll(): Observable<Brand[]> {
    return this.brands$;
  }

  public getById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/${id}`);
  }

  public add(brand: Partial<Brand>): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, brand).pipe(
      tap(() => this.refreshBrandList())
    );
  }

  public update(id: number, brand: Partial<Brand>): Observable<Brand> {
    return this.http.patch<Brand>(`${this.apiUrl}/${id}`, brand).pipe(
      tap(() => this.refreshBrandList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshBrandList())
    );
  }
}
