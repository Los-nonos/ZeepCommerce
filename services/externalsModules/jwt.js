import jwtDecode from 'jwt-decode';

class Jwt {
  decode = token => jwtDecode(token);

  getExpirationTime = token => this.decode(token).exp;

  expiresIn = token => this.getExpirationTime(token) - Date.now() / 1000;

  getUserId = token => this.decode(token).userId;
}

export default new Jwt();
