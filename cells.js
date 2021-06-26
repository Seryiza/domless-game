class Cell {
    enter(world, player) {}
}

class NothingCell extends Cell {
    enter(world) {
        world.show('В поле ничего не происходит и делать нечего.');
    }
}

class CatapultCell extends Cell {
    enter(world) {
        world.show('Вы натыкаетесь на катапульту, но не можете разобраться, куда она стреляет.');
        if (!world.confirm('Хотите выстрелиться из неё?')) {
            return;
        }

        const isForward = world.randomBoolean();
        const distance = world.randomRange(1, 10);
        if (isForward) {
            world.moveForward(distance);
            world.show(`Катапульта выстрелила вперёд на ${distance} клеток!`);
        } else {
            world.moveBackward(distance);
            world.show(`Катапульта выстрелила назад на ${distance} клеток!`);
        }
    }
}

const CELLS = [
    NothingCell,
    CatapultCell,
];
