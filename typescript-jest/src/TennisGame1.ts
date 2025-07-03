import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (this.isPlayerOne(playerName)) {
      this.player1Score++;
      return;
    }
    if (this.isPlayerTwo(playerName)) {
      this.player2Score++;
      return;
    }
  }

  getScore(): string {
    if (this.playersHaveEqualScores()) {
      return this.getScoreForEqualPlayerScores();
    }

    if (this.atLeastOnePlayerHasMoreThanThreePoints()) {
      return this.getScoreForPlayerWithAdvantage();
    }

    return this.getScoreForLittlePlayerScoreDifference();
  }

  private getScoreForLittlePlayerScoreDifference() {
    const scoreNames: string[] = ["Love", "Fifteen", "Thirty", "Forty"];
    return `${scoreNames[this.player1Score]}-${scoreNames[this.player2Score]}`;
  }

  private getScoreForPlayerWithAdvantage(): string {
    const scoreDifference: number = this.player1Score - this.player2Score;
    if (this.playerOneHasAdvantage(scoreDifference)) {
      return "Advantage player1";
    }
    if (this.playerTwoHasAdvantage(scoreDifference)) {
      return "Advantage player2";
    }
    if (this.playerOneHasMoreThanOnePointAdvantage(scoreDifference)) {
      return "Win for player1";
    }
    return "Win for player2";
  }

  private playerOneHasMoreThanOnePointAdvantage(scoreDifference: number) {
    return scoreDifference >= 2;
  }

  private playerTwoHasAdvantage(scoreDifference: number) {
    return scoreDifference === -1;
  }

  private playerOneHasAdvantage(scoreDifference: number) {
    return scoreDifference === 1;
  }

  private atLeastOnePlayerHasMoreThanThreePoints(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  private playersHaveEqualScores(): boolean {
    return this.player1Score === this.player2Score;
  }

  private isPlayerTwo(playerName: string): boolean {
    return playerName === this.player2Name;
  }

  private isPlayerOne(playerName: string): boolean {
    return playerName === this.player1Name;
  }

  private getScoreForEqualPlayerScores(): string {
    const scoreNames: string[] = ["Love-All", "Fifteen-All", "Thirty-All"];
    return scoreNames[this.player1Score] || "Deuce";
  }
}
