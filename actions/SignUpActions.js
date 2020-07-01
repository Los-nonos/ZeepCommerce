import { actionNames } from '../utils/constants/actionConstants';

export function signUp(personalData) {
  return {
    type: actionNames.signUp,
    ...personalData,
  }
}