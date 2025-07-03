import { TennisGame1 } from "../src/TennisGame1";

describe("TennisGame1", (): void => {
  it(`adding points to an invalid name does not change the score`, (): void => {
    const game: TennisGame1 = new TennisGame1("player1", "player2");
    game.wonPoint("invalidPlayer");

    expect(game.getScore()).toBe("Love-All");
  });

  it(`given equal score of 8, returns "Deuce"`, (): void => {
    const game: TennisGame1 = new TennisGame1("player1", "player2");
    for (let i = 0; i < 8; i++) {
      game.wonPoint("player1");
      game.wonPoint("player2");
    }

    expect(game.getScore()).toBe("Deuce");
  });
});
