import { Component } from '@angular/core';
import { BracketService } from '../bracket.service';
import { BracketData } from '../bracket/bracket-data';

@Component({
  selector: 'app-mobile-vote',
  templateUrl: './mobile-vote.component.html',
  styleUrls: ['./mobile-vote.component.scss']
})
export class MobileVoteComponent {
  bracket = new BracketData([],[])
  winner_src = '';
  current_round=0;
  current_match=0;
  match_votes_1 = 0;
  match_votes_2 = 0;
  game_complete = false;

  constructor(private bracketService: BracketService){
    this.bracketService.getBracket.subscribe(b => this.bracket = b);
    this.bracketService.getWinnerSrc.subscribe(ws => this.winner_src = ws);

    this.bracketService.getCurrentRound.subscribe(cr => this.current_round = cr);
    this.bracketService.getCurrentMatch.subscribe(cm => this.current_match = cm);

    this.bracketService.getMatchVote1.subscribe(mv1 => this.match_votes_1 = mv1);
    this.bracketService.getMatchVote2.subscribe(mv2 => this.match_votes_2 = mv2);
    this.bracketService.getGameComplete.subscribe(g => this.game_complete = g);
  }


  onClick(char_num: number){
    if (char_num == 0) {
      this.match_votes_1 += 1;
    }
    else {
      this.match_votes_2 += 1;
    }

    // temp number, should be based on participants
    // have to address ties also
    if (this.match_votes_1 + this.match_votes_2 == 8) {
      this.bracket.updateVotes(this.current_round, this.current_match, char_num, [this.match_votes_1, this.match_votes_2])
      this.bracketService.updateBracket(this.bracket);

      if (this.current_round == this.bracket.getRoundTotal()-1) {
        this.winner_src = this.bracket.getRound(this.current_round)[0].getWinning();
        this.bracketService.updateWinnerSrc(this.winner_src);
        this.bracketService.updateGameComplete(true);
      }

      this.bracket.updateNextRound(this.current_round, this.current_match)
      this.bracketService.updateBracket(this.bracket);

      this.current_match += 1;
      this.bracketService.updateCurrentMatch(this.current_match);
      this.match_votes_1 = 0;
      this.match_votes_2 = 0;

      if ((this.current_match > this.bracket.getRound(this.current_round).length - 1)) {
        this.current_round += 1;
        this.bracketService.updateCurrentRound(this.current_round);
        this.current_match = 0;
        this.bracketService.updateWinnerSrc(this.winner_src);
      }
    }
  }
}
