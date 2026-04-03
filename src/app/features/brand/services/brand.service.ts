import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Brand, BrandApiResponse } from '../models/brand.model';

@Injectable({ providedIn: 'root' })
export class BrandService {
  private apiUrl = 'http://localhost:3000/brand';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Brand[]> {
    return this.http.get<BrandApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  public getById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/${id}`);
  }

  public add(brand: Partial<Brand>): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, brand);
  }

  public update(id: number, brand: Partial<Brand>): Observable<Brand> {
    return this.http.patch<Brand>(`${this.apiUrl}/${id}`, brand);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
