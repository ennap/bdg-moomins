import { Component, OnInit } from '@angular/core';
import { BracketData, MatchData } from './bracket-data';
import { BracketService } from '../bracket.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResultsModalComponent } from '../results-modal/results-modal.component';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent {
  bracket = new BracketData([],[])
  winner_src = '';
  current_round=0;
  current_match=0;
  match_votes_1 = 0;
  match_votes_2 = 0;

  constructor(private bracketService: BracketService, public dialog: MatDialog){
    this.bracketService.getBracket.subscribe(b => this.bracket = b);
    this.bracketService.getWinnerSrc.subscribe(ws => this.winner_src = ws);

    this.bracketService.getCurrentRound.subscribe(cr => this.current_round = cr);
    this.bracketService.getCurrentMatch.subscribe(cm => this.current_match = cm);

    this.bracketService.getMatchVote1.subscribe(mv1 => this.match_votes_1 = mv1);
    this.bracketService.getMatchVote2.subscribe(mv2 => this.match_votes_2 = mv2);
  }

  openModal(){
    const results_modal = this.dialog.open(ResultsModalComponent);
  }

  // for now hard-coded, but would be responsive ideally (this function would calculate positions based on window size)
  calculatePositions(){
    var positions:Array<number[][][]> = [];

    // round 1, match 1
    var round_1 = []
    round_1.push(
      [[136, 139], 
      [136, 294]]
    )

    // round 1, match 2
    round_1.push(
      [[136, 521],
      [136, 676]]
    )

    // round 1, match 3
    round_1.push(
      [[1145, 139], 
      [1145, 294]])

    // round 1, match 4
    round_1.push(
      [[1145, 521],
      [1145, 676]]
    )

    positions.push(round_1);

    var round_2 = []
    // round 2, match 1
    round_2.push(
      [[302, 213], 
      [302, 598]]
    )

    // round 2, match 2
    round_2.push(
      [[979, 213],
      [979, 598]]
    )
    positions.push(round_2)

    // round 3, match 1
    var round_3 = [];
    round_3.push(
      [[420, 407], 
      [861, 407]]
    )
    positions.push(round_3);

    // // winning item
    positions.push([[[706, 407]]])

    return positions;
  }

  // for now hard-coded, but would be responsive ideally (this function would calculate bracket positions based on window size)
  // array is ordered as follows: x, y, w, h, direction
  calculateBracketPositions() {
    var positions:Array<{ x: number; y: number; width: number; height: number; down: boolean; right: boolean;}[][]> = [];

    var round_1 = [];

    //round 1, match 1
    round_1.push([
      {'x':266, 'y':182.95, 'width':101, 'height':30.05, 'down':true, 'right': true},
      {'x':266, 'y':343, 'width':101, 'height':30.05, 'down':false, 'right': true}
    ])
    //round 1, match 2
    round_1.push([
      {'x':266, 'y':568.5, 'width':101, 'height':30.05, 'down':true, 'right': true},
      {'x':266, 'y':727.16, 'width':101, 'height':30.05, 'down':false, 'right': true}
    ])
    //round 1, match 3
    round_1.push([
      {'x':1045, 'y':182.95, 'width':101, 'height':30.05, 'down':true, 'right': false},
      {'x':1045, 'y':343, 'width':101, 'height':30.05, 'down':false, 'right': false}
    ])
    //round 1, match 4
    round_1.push([
      {'x':1045, 'y':568.5, 'width':101, 'height':30.05, 'down':true, 'right': false},
      {'x':1045, 'y':727.16, 'width':101, 'height':30.05, 'down':false, 'right': false}
    ])

    positions.push(round_1);

    var round_2 = [];
    //round 2, match 1
    round_2.push([
      {'x':432, 'y':279.98, 'width':50, 'height':127.68, 'down':true, 'right': true},
      {'x':432, 'y':536.33, 'width':50, 'height':127.68, 'down':false, 'right': true}
    ])
    //round 2, match 2
    round_2.push([
      {'x':929, 'y':279.98, 'width':50, 'height':127.68, 'down':true, 'right': false},
      {'x':929, 'y':536.33, 'width':50, 'height':127.68, 'down':false, 'right': false}
    ])

    positions.push(round_2);

    var round_3 = [];
    round_3.push([
      {'x':550, 'y':472.5, 'width':92, 'height':5, 'down':true, 'right': true},
      {'x':770, 'y':472.5, 'width':92, 'height':5, 'down':false, 'right': false}
    ])
    positions.push(round_3);
    
    return positions;
  }
}
