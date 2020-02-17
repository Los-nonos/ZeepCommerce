class EditUserRoleCommand {
  @private id: number;
  constructor(id: number, name: string) {
    this.id = id;

    this.name = name;
  }
  public getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}

export default EditUserRoleCommand;
