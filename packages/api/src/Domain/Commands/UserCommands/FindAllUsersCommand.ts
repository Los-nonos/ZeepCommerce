class FindAllUsersCommand {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
export default FindAllUsersCommand;
