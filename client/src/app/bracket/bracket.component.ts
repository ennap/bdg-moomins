import { Component, OnInit } from '@angular/core';
import { BracketData, MatchData } from './bracket-data';
import { BracketService } from '../bracket.service';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent {
  bracket = new BracketData([])
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

  // for now hard-coded, but would be responsive ideally (this function would calculate positions based on window size)
  calculatePositions(){
    var positions:Array<number[][][]> = [];

    // round 1, match 1
    var round_1 = []
    round_1.push(
      [[136, 119], 
      [136, 274]]
    )

    // round 1, match 2
    round_1.push(
      [[136, 501],
      [136, 656]]
    )

    // round 1, match 3
    round_1.push(
      [[1145, 119], 
      [1145, 274]])

    // round 1, match 4
    round_1.push(
      [[1145, 501],
      [1145, 656]]
    )

    positions.push(round_1);

    var round_2 = []
    // round 2, match 1
    round_2.push(
      [[302, 193], 
      [302, 578]]
    )

    // round 2, match 2
    round_2.push(
      [[979, 193],
      [979, 578]]
    )
    positions.push(round_2)

    // round 3, match 1
    var round_3 = [];
    round_3.push(
      [[420, 387], 
      [861, 387]]
    )
    positions.push(round_3);

    // // winning item
    positions.push([[[706, 387]]])

    return positions;
  }

  // for now hard-coded, but would be responsive ideally (this function would calculate bracket positions based on window size)
  // array is ordered as follows: x, y, w, h, direction
  calculateBracketPositions() {
    var positions:Array<{ x: number; y: number; width: number; height: number; down: boolean; right: boolean;}[][]> = [];

    var round_1 = [];

    //round 1, match 1
    round_1.push([
      {'x':266, 'y':162.95, 'width':101, 'height':30.05, 'down':true, 'right': true},
      {'x':266, 'y':323, 'width':101, 'height':30.05, 'down':false, 'right': true}
    ])
    //round 1, match 2
    round_1.push([
      {'x':266, 'y':548.5, 'width':101, 'height':30.05, 'down':true, 'right': true},
      {'x':266, 'y':707.16, 'width':101, 'height':30.05, 'down':false, 'right': true}
    ])
    //round 1, match 3
    round_1.push([
      {'x':1045, 'y':162.95, 'width':101, 'height':30.05, 'down':true, 'right': false},
      {'x':1045, 'y':323, 'width':101, 'height':30.05, 'down':false, 'right': false}
    ])
    //round 1, match 4
    round_1.push([
      {'x':1045, 'y':548.5, 'width':101, 'height':30.05, 'down':true, 'right': false},
      {'x':1045, 'y':707.16, 'width':101, 'height':30.05, 'down':false, 'right': false}
    ])

    positions.push(round_1);

    var round_2 = [];
    //round 2, match 1
    round_2.push([
      {'x':432, 'y':259.98, 'width':50, 'height':127.68, 'down':true, 'right': true},
      {'x':432, 'y':516.33, 'width':50, 'height':127.68, 'down':false, 'right': true}
    ])
    //round 2, match 2
    round_2.push([
      {'x':929, 'y':259.98, 'width':50, 'height':127.68, 'down':true, 'right': false},
      {'x':929, 'y':516.33, 'width':50, 'height':127.68, 'down':false, 'right': false}
    ])

    positions.push(round_2);

    var round_3 = [];
    round_3.push([
      {'x':550, 'y':452.5, 'width':92, 'height':4, 'down':true, 'right': true},
      {'x':770, 'y':452.5, 'width':92, 'height':4, 'down':false, 'right': false}
    ])
    positions.push(round_3);
    
    return positions;
  }
}
