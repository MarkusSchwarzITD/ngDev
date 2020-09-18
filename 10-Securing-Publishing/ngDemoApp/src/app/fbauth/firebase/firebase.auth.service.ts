import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginCredentials } from './credential.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private fireAuth: AngularFireAuth) {
    this.handleUserChanged();
  }

  private Token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public User: BehaviorSubject<firebase.User> = new BehaviorSubject(null);

  handleUserChanged() {
    this.fireAuth.authState.subscribe((u) => {
      console.log('fbuser changed', u);
      this.User.next(u);
      this.User.pipe(
        tap((user) => console.log('fbuser changed', user)),
        mapTo((user) => {
          if (user != null) {
            (user as firebase.User).getIdToken().then((idToken: string) => {
              this.Token.next(idToken);
            });
          } else {
            this.Token.next(null);
          }
        })
      ).subscribe();
    });
  }

  getToken(): Observable<string> {
    return this.Token;
  }

  isAuthenticated(): Observable<boolean> {
    this.User.subscribe((user) => {
      return user != null ? of(true) : of(false);
    });
    const loggedIn = !environment.authEnabled;
    return of(loggedIn);
  }

  registerUser(cred: LoginCredentials): Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.NONE)
      .then(() => {
        return this.fireAuth
          .createUserWithEmailAndPassword(cred.email, cred.password)
          .catch((err) => {
            console.log('Error logging in', err);
            return err;
          });
      });
  }

  logOn(cred: LoginCredentials): Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.NONE)
      .then(() => {
        return this.fireAuth.signInWithEmailAndPassword(
          cred.email,
          cred.password
        );
      });
  }

  logOff(): Promise<void> {
    return this.fireAuth.signOut().then(() => {
      // this.fbUser = null;
    });
  }
}
