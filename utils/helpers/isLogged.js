import authStorage from '../../services/localStorage/authStorage';

export const isLogged = !!authStorage.getSession();
