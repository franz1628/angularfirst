import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, LoginRequest, User } from '../models/auth.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromLocalStorage());
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, request).pipe(
      tap(response => {
        this.saveToLocalStorage(response);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  public isAuthenticated(): boolean {
    return !!this.currentUserValue && !!localStorage.getItem('token');
  }

  private saveToLocalStorage(response: AuthResponse): void {
    localStorage.setItem('currentUser', JSON.stringify(response.user));
    localStorage.setItem('token', response.access_token);
  }

  private getUserFromLocalStorage(): User | null {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}
