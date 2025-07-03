import { TennisGame1 } from "../src/TennisGame1";

describe("TennisGame1", (): void => {
  it(`given adding points to an invalid name does not change the score`, (): void => {
    const game: TennisGame1 = new TennisGame1("player1", "player2");
    game.wonPoint("invalidPlayer");

    expect(game.getScore()).toBe("Love-All");
  });
});
