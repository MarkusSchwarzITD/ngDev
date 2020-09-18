import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FirebaseAuthService } from './firebase.auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { loginData } from './mock.data';

describe('firebase.auth.service', () => {
  let fbservice: FirebaseAuthService;
  let controller: HttpTestingController;
  const key = 'fbUser';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
      ],
      providers: [FirebaseAuthService],
    });

    fbservice = TestBed.inject(FirebaseAuthService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('Can be created with no user loged in', () => {
    expect(fbservice).toBeTruthy();
    expect(Reflect.get(fbservice, key));
    // Same as abouve - a little easier if you know JavaScript prop accessors
    expect(fbservice[key]).toBe(undefined);
  });

  it('registerUser', () => {});

  it('logOn', () => {
    fbservice.logOn(loginData);
  });
});
