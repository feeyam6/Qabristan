import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {}

  // Sign-up method
  signup(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Login method
  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential: any) => {
        return userCredential.user?.getIdToken();  // Get the ID token from Firebase
      }),
      switchMap((idToken) => {
        return this.http.post('https://your-api-url/api/authentication/verifyToken', { token: idToken });
      })
    );
  }

  // Logout method
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Get the current user
  getUser(): Observable<any> {
    return this.afAuth.authState;
  }

  // Send Firebase ID Token to backend for verification
  verifyToken(idToken: string) {
    return this.http.post('https://your-api-url/api/authentication/verifyToken', { token: idToken });
  }
}

