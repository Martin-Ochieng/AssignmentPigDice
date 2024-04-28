class Game {
    constructor() {
        this.rolls = 0;
        this.wins = 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    diceGame() {
        console.log("Dice game. You have 3 tries to roll a 6 - go");

        while (this.rolls <= 2) {
            const dice = this.rollDice();

            console.log(dice);

            if (dice === 6) {
                console.log("You won!");
                this.wins++;
                if (this.rolls === 0) {
                    console.log("It took " + (this.rolls + 1) + " try");
                } else {
                    console.log("It took " + (this.rolls + 1) + " tries");
                }
                break;
            } else {
                if (dice > 4) {
                    console.log("OOOh, a " + dice + ". So Close!");
                } else {
                    console.log("Not Even close");
                }
            }

            this.rolls++;
        }

        console.log("Times won: " + this.wins);
    }
}

export default Game;
