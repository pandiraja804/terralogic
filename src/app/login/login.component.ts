import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { ApiService } from '../service/http-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  user: User | null = null;
  loginForm: FormGroup;
  private auth = getAuth(initializeApp(environment.firebaseConfig));

  constructor(private router: Router, private fb: FormBuilder, private ApiService: ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {

  }
  googleAuthbtn() {
    this.ApiService.signInLogin();
  }


  onSubmit() {
    if (this.loginForm.valid) {

      let jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJhamFwYW5kaSIsImVtYWlsIjoicGFuZGlyYWphODA0QGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.NMykMeain80SqYGOMe28Jv4yR4zLBpdxPc2_Q4bZl4g";
      localStorage.setItem('jwtToken', jwtToken)
      this.router.navigate(['/home']);
    }
    else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }

  signUpBtn() {
    this.router.navigate(['/registration']);
  }


}
