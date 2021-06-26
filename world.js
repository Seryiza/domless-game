class World {
    position = 0;
    static FINISH_POSITION = 30;

    getPosition() {
        return this.position;
    }

    isCompleted() {
        return this.position >= World.FINISH_POSITION;
    }

    rollDice() {
        const dice = this.randomRange(0, 6);
        this.moveForward(dice);
        this.show(`Вы бросаете кубик, выпадает ${dice} и вы теперь на клетке ${this.position}`);
    }

    moveForward(cells) {
        this.position += cells;
    }

    moveBackward(cells) {
        // Нельзя уйти в отрицательную координату.
        this.position = Math.max(0, this.position - cells);
    }

    show(text) {
        alert(text);
    }

    confirm(question) {
        return confirm(question);
    }

    randomBoolean() {
        return Math.random() > 0.5;
    }

    randomRange(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}
