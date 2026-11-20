import { Author } from "./Author.js";

export class Writer extends Author {
  genre;

  constructor(name, birthYear, isAlive, genre = "проза") {
    super(name, birthYear, isAlive);
    this.genre = genre;
  }

  get genre() { return this._genre; }
  set genre(value) {
    if (typeof value !== "string") throw new TypeError("genre должен быть string");
    this._genre = value;
  }

  write() {
    console.log("[Writer] Приватный метод #writeManuscript отключён в этом классе");
    return this;
  }

  show() {
    console.log(`[Writer] name="${this.name}", birthYear=${this.birthYear}, isAlive=${this.isAlive}, genre="${this.genre}"`);
    return this;
  }

  static clone(instance) {
    return new Writer(
      instance.name,
      instance.birthYear,
      instance.isAlive,
      instance.genre ?? "проза"
    );
  }
}
