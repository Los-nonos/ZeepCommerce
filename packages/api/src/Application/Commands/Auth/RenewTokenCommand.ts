class RenewTokenCommand {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}

export default RenewTokenCommand;
