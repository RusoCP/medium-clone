import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {CurrentUserInteface} from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInteface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
