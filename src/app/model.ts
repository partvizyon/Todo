export class Model {
  user;
  items;

  constructor() {
    this.user = "Ella";

    this.items = [
      new TodoItem("Spor", true),
      new TodoItem("Kahvaltı", false),
      new TodoItem("Market", false),
      new TodoItem("Fatura", false),
      new TodoItem("Sinema", false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
