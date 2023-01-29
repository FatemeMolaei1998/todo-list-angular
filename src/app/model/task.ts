import { Guid } from "guid-typescript";

export class Task {
  title: String
  status: Boolean
  id
  constructor(title: String, status: Boolean) {
    this.title = title
    this.status = status
    this.id = Guid.create()
  }
}
