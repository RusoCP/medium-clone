import {createFeature, createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/auth-state.interface';
import {register} from './actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(register, (state: AuthStateInterface) => ({
      ...state,
      isSubmitting: true,
    }))
  ),
});

export const {
  name: authFetureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;