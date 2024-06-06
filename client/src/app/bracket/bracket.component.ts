import { Component, OnInit } from '@angular/core';
import { BracketData, MatchData } from './bracket-data';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {
  bracket = new BracketData(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '-', '-', '-', '-', '-', '-'])
  current_round=0;
  current_match=0;
  // will have to adjust votes to keep track of who's casting the votes too
  match_votes_1 = 0;
  match_votes_2 = 0;

  ngOnInit(): void {
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
      this.bracket.updateNextRound(this.current_round, this.current_match)

      this.current_match += 1;
      this.match_votes_1 = 0;
      this.match_votes_2 = 0;
      
      if (this.current_match > this.bracket.getRound(this.current_round).length - 1) {
        this.current_round += 1;
        this.current_match = 0;
      }
    }
  }
}
