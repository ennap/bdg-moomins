import { Component, OnInit } from '@angular/core';
import { BracketData, MatchData } from './bracket-data';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {
  bracket = new BracketData(['assets/avatar.jpeg', 'assets/danny-phantom.jpeg', 'assets/fairly-odd.jpeg', 'assets/kim-possible.jpg', 'assets/phineas-and-ferb.jpg', 'assets/powerpuff-girls.jpeg', 'assets/scooby-doo.jpg', 'assets/spongebob.jpg', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png'])
  winner_src = 'assets/empty.png';

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
      if (this.current_round == this.bracket.getRoundTotal()-1) {
        this.winner_src = this.bracket.getRound(this.current_round)[0].getWinning();
      }

      this.bracket.updateVotes(this.current_round, this.current_match, char_num, [this.match_votes_1, this.match_votes_2])
      this.bracket.updateNextRound(this.current_round, this.current_match)

      this.current_match += 1;
      this.match_votes_1 = 0;
      this.match_votes_2 = 0;

      if ((this.current_match > this.bracket.getRound(this.current_round).length - 1)) {
        this.current_round += 1;
        this.current_match = 0;
      }
    }
  }

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
      [[302, 196], 
      [302, 578]]
    )

    // round 2, match 2
    round_2.push(
      [[979, 196],
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
}
