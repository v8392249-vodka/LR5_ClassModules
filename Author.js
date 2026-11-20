export class Author {
    name;
    birthYear;
    isAlive;

    #manuscript = null;

    constructor(name = "Неизвестный", birthYear = 0, isAlive = true) {
        this.name = name;
        this.birthYear = birthYear;
        this.isAlive = isAlive;
    }

    get name() { return this._name; }
    set name(value) {
        if (typeof value !== "string") throw new TypeError("name должен быть string");
        this._name = value;
    }

    get birthYear() { return this._birthYear; }
    set birthYear(value) {
        if (typeof value !== "number") throw new TypeError("birthYear должен быть number");
        this._birthYear = value;
    }

    get isAlive() { return this._isAlive; }
    set isAlive(value) {
        if (typeof value !== "boolean") throw new TypeError("isAlive должен быть boolean");
        this._isAlive = value;
    }

    show() {
        console.log(`[Author] name="${this.name}", birthYear=${this.birthYear}, isAlive=${this.isAlive}`);
        console.log(`  manuscript = ${this.#manuscript}`);
        return this;
    }

    delete() {
        this._name = null;
        this._birthYear = null;
        this._isAlive = null;
        this.#manuscript = null;
        Object.freeze(this);
        console.log("[Author] экземпляр удалён");
        return null;
    }

    copy() {
        return this;
    }

    static clone(instance) {
        return new Author(instance.name, instance.birthYear, instance.isAlive);
    }

    #writeManuscript(text) {
        if (typeof text !== "string" || text.length === 0) {
            throw new Error("Рукопись должна быть непустой строкой");
        }
        this.#manuscript = text;
        this._isAlive = true;
        console.log(`[Author] Рукопись написана: "${text}"`);
    }

    write(text) {
        return this.#writeManuscript(text);
    }
}
