export class Task {
  public done: boolean = false;
  public description: String;
  public priority: String;
  constructor(public info: String[], public id: number){
    this.description = info[0];
    this.priority = info[1];
  }
}
