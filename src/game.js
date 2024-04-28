class Game {
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.rolls = 0;
        this.wins = 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    diceGame() {
        this.outputElement.innerHTML += "<p>Dice game. You have 3 tries to roll a 6 - go</p>";

        while (this.rolls <= 2) {
            const dice = this.rollDice();

            this.outputElement.innerHTML += "<p>" + dice + "</p>";

            if (dice === 6) {
                this.outputElement.innerHTML += "<h2>You won!</h2>";
                this.wins++;
                if (this.rolls === 0) {
                    this.outputElement.innerHTML += "<p>It took " + (this.rolls + 1) + " try</p>";
                } else {
                    this.outputElement.innerHTML += "<p>It took " + (this.rolls + 1) + " tries</p>";
                }
                break;
            } else {
                if (dice > 4) {
                    this.outputElement.innerHTML += "<p>OOOh, a " + dice + ". So Close!</p>";
                } else {
                    this.outputElement.innerHTML += "<p>Not Even close</p>";
                }
            }

            this.rolls++;
        }

        this.outputElement.innerHTML += "<p>Times won: " + this.wins + "</p>";
    }
}

export default Game;
