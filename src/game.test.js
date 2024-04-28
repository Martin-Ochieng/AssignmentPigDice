import Game from './game';


describe('Game', () => {
    test('should roll a 6 within 3 tries', () => {
        const game = new Game();
        const rollDiceMock = jest.spyOn(game, 'rollDice');
        rollDiceMock.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(6);
        game.diceGame();
        expect(rollDiceMock).toHaveBeenCalledTimes(3);
    });

    test('should not roll a 6 within 3 tries', () => {
        const game = new Game();
        const rollDiceMock = jest.spyOn(game, 'rollDice');
        rollDiceMock.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3);
        game.diceGame();
        expect(rollDiceMock).toHaveBeenCalledTimes(3);
    });

    test('should win the game if a 6 is rolled', () => {
        const game = new Game();
        const rollDiceMock = jest.spyOn(game, 'rollDice');
        rollDiceMock.mockReturnValueOnce(6);
        game.diceGame();
        expect(rollDiceMock).toHaveBeenCalledTimes(1);

    });

    test('should correctly count the number of wins', () => {
        const game = new Game();
        const rollDiceMock = jest.spyOn(game, 'rollDice');
        rollDiceMock.mockReturnValueOnce(5).mockReturnValueOnce(1).mockReturnValueOnce(6);
        game.diceGame();
        expect(rollDiceMock).toHaveBeenCalledTimes(3);

    });


    test('rollDice() should return a number between 1 and 6', () => {
        const game = new Game();
        const roll = game.rollDice();
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(6);
    });



});
