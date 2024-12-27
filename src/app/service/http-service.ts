import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

declare const $: any;
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  base: any = 'https://jsonplaceholder.typicode.com';

  apiURL: string = this.base;
  user: User | null = null;
  private auth = getAuth(initializeApp(environment.firebaseConfig));



  getHttpOptions(): any {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Authorization': `Bearer ${token}` // Add the dynamic token here
      }),
    };
  }


  constructor(private httpClient: HttpClient, private router: Router) { }

  async getApi(Api_url: any): Promise<Observable<any>> {
    const options = this.getHttpOptions();
    return this.httpClient.get(this.apiURL + Api_url, options);
  }

  signInLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        this.user = result.user;

        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Sign-in error:', error.message);
      });
  }

  // Sign-Out
  logout() {
    signOut(this.auth)
      .then(() => {
        this.user = null;
        this.router.navigate(['/login']);
        console.log('User signed out successfully');
      })
      .catch((error) => {
        console.error('Sign-out error:', error.message);
      });
  }

}
