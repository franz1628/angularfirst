import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Seller } from '../models/seller.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SellerService {
  private apiUrl = `${environment.apiUrl}/seller`;

  private sellerSubject = new BehaviorSubject<Seller[]>([]);
  public sellers$: Observable<Seller[]> = this.sellerSubject.asObservable();

  constructor(private http: HttpClient) {
    this.refreshSellerList();
  }

  public refreshSellerList(): void {
    this.http.get<Seller[]>(this.apiUrl).subscribe(sellers => this.sellerSubject.next(sellers));
  }

  public getAll(): Observable<Seller[]> {
    return this.sellers$;
  }

  public getById(id: number): Observable<Seller> {
    return this.http.get<Seller>(`${this.apiUrl}/${id}`);
  }

  public add(seller: Partial<Seller>): Observable<Seller> {
    return this.http.post<Seller>(this.apiUrl, seller).pipe(
      tap(() => this.refreshSellerList())
    );
  }

  public update(id: number, seller: Partial<Seller>): Observable<Seller> {
    return this.http.patch<Seller>(`${this.apiUrl}/${id}`, seller).pipe(
      tap(() => this.refreshSellerList())
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshSellerList())
    );
  }
}
