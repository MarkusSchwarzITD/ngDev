import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../shared/snackbar/snackbar.service';
import { FirebaseAuthService } from '../../firebase.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private as: FirebaseAuthService, private sns: SnackbarService) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  logIn(form: FormGroup) {
    this.as.logOn(form.value).then(
      (result) => {
        console.log('logged in', result);
      },
      (err) => {
        this.sns.displayComponent(err.message);
      }
    );
  }
}
