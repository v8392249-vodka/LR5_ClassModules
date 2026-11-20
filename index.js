import { Writer } from "./Writer.js";

const list = [
  new Writer("Лев Толстой", 1828, false, "роман"),
  new Writer("Стивен Кинг", 1947, true, "хоррор"),
];

list.forEach(a => a.show());

const original = list[0];

const link = original.copy();
console.log("copy() === original ?", link === original);

const cloned = Writer.clone(original);
console.log("clone() === original ?", cloned === original);
cloned.show();

const toDelete = list[1];
toDelete.delete();
console.log("После delete: name =", toDelete.name);
