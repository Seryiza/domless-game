class Game {
    constructor(cells) {
        this.cells = cells;
    }

    play() {
        const world = new World();
        const player = new Player();

        while (!world.isCompleted()) {
            world.rollDice();

            const cell = this.getRandomCell();
            cell.enter(world, player);
        }

        world.show('Победа!');
    }

    getRandomCell() {
        return new this.cells[this.randomRange(0, this.cells.length - 1)];
    }

    randomRange(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}
