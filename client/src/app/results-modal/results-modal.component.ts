import { Component } from '@angular/core';
import { BracketService } from '../bracket.service';
import { BracketData } from '../bracket/bracket-data';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']
})
export class ResultsModalComponent {
  bracket = new BracketData([],[])
  winner_src = '';
  current_round=0;
  current_match=0;
  match_votes_1 = 0;
  match_votes_2 = 0;

  constructor(private bracketService: BracketService){
    this.bracketService.getBracket.subscribe(b => this.bracket = b);
    this.bracketService.getWinnerSrc.subscribe(ws => this.winner_src = ws);

    this.bracketService.getCurrentRound.subscribe(cr => this.current_round = cr);
    this.bracketService.getCurrentMatch.subscribe(cm => this.current_match = cm);

    this.bracketService.getMatchVote1.subscribe(mv1 => this.match_votes_1 = mv1);
    this.bracketService.getMatchVote2.subscribe(mv2 => this.match_votes_2 = mv2);
  }
}
