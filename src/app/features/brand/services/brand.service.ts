import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Brand, BrandApiResponse } from '../models/brand.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BrandService {
  private apiUrl = `${environment.apiUrl}/brand`;

  private brandsSubject = new BehaviorSubject<Brand[]>([]);
  public brands$: Observable<Brand[]> = this.brandsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshBrandList();
  }

  public refreshBrandList(): void {
    this.http.get<Brand[]>(this.apiUrl).subscribe(response => this.brandsSubject.next(response));
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

  public uploadLogo(id: number, file: File): Observable<{ logoUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ logoUrl: string }>(`${this.apiUrl}/${id}/uploadLogo`, formData);
  }
}
