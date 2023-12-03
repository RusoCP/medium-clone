import {createAction, props} from '@ngrx/store';
import {RegisterRequestInteface} from '../types/registerRequest.interface';

export const register = createAction(
  '[Auth] Register',
  props<{request: RegisterRequestInteface}>()
);
