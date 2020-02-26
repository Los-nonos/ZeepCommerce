import jwtDecode from 'jwt-decode';

class Jwt {
  desencode = token => jwtDecode(token);

  getExpirationTime = token => this.desencode(token).exp;

  expiresIn = token => this.getExpirationTime(token) - Date.now() / 1000;
}

export default new Jwt();
