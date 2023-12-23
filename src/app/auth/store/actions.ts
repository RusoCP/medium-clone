import {createActionGroup, props} from '@ngrx/store';
import {RegisterRequestInteface} from '../types/registerRequest.interface';
import {CurrentUserInteface} from 'src/app/shared/types/currentUser.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {LoginRequestInteface} from '../types/loginRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: RegisterRequestInteface}>(),
    'Register Succes': props<{currentUser: CurrentUserInteface}>(),
    'Register Failure': props<{errors: BackendErrorsInterface}>(),

    Login: props<{request: LoginRequestInteface}>(),
    'Login Succes': props<{currentUser: CurrentUserInteface}>(),
    'Login Failure': props<{errors: BackendErrorsInterface}>(),
  },
});
