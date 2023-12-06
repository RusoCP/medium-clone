import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Store} from '@ngrx/store';
import {authActions} from '../../store/actions';
import {RegisterRequestInteface} from '../../types/registerRequest.interface';
import {RouterLink} from '@angular/router';
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers';
import {CommonModule} from '@angular/common';
import {combineLatest} from 'rxjs';
import {BackendErrorMessages} from 'src/app/shared/components/backendErrorMessages/backend-error-messages.component';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessages,
  ],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: RegisterRequestInteface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.register({request}));
  }
}
