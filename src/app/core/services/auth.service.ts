import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AuthResponse, LoginRequest, User } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromLocalStorage());
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor() {}

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public login(request: LoginRequest): Observable<AuthResponse> {
    // Mock login logic
    if (request.username === 'admin' && request.password === 'admin123') {
      const mockResponse: AuthResponse = {
        token: 'mock-jwt-token-' + Math.random().toString(36).substring(7),
        user: {
          id: '1',
          username: 'admin',
          email: 'admin@example.com',
          role: 'ADMIN'
        }
      };

      return of(mockResponse).pipe(
        delay(1500), // Simulate network delay
        tap(response => {
          this.saveToLocalStorage(response);
          this.currentUserSubject.next(response.user);
        })
      );
    } else {
      return throwError(() => new Error('Credenciales incorrectas')).pipe(
        delay(1000)
      );
    }
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
    localStorage.setItem('token', response.token);
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
