import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordMatchValidator // Add custom validator directly here
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.regForm.valid) {
      this.router.navigate(['/']);
    }
    else {
      this.regForm.markAllAsTouched();
    }
  }

  // Simple Validator Function
  passwordMatchValidator(formGroup: AbstractControl): void | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mustMatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors({ mustMatch: false });
    }
  }

  loginBtn() {
    this.router.navigate(['/']);
  }


}
