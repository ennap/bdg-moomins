import { Component } from '@angular/core';
import { BracketService } from '../bracket.service';
import { BracketData } from '../bracket/bracket-data';

@Component({
  selector: 'app-mobile-vote',
  templateUrl: './mobile-vote.component.html',
  styleUrls: ['./mobile-vote.component.scss']
})
export class MobileVoteComponent {
  bracket = new BracketData([])
  current_round = 0;
  current_match = 0;

  constructor(private bracketService: BracketService){
    this.bracketService.getBracket.subscribe(b => this.bracket = b);
    this.bracketService.getCurrentRound.subscribe(cr => this.current_round = cr);
    this.bracketService.getCurrentMatch.subscribe(cm => this.current_match = cm);
  }
}
