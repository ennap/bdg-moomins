import { Component, Inject } from '@angular/core';
import { BracketService } from '../bracket.service';
import { BracketData } from '../bracket/bracket-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  round: number;
  match: number;
}

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']
})
export class ResultsModalComponent {
  bracket = new BracketData([],[])

  selected_round: number;
  selected_match: number;

  chart_data: any;

  constructor(private bracketService: BracketService, @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.bracketService.getBracket.subscribe(b => this.bracket = b);
    this.selected_round = data.round;
    this.selected_match = data.match;

    this.chart_data = {
      datasets: [{
        data: [this.bracket.getCharVote(this.selected_round, this.selected_match, 0), this.bracket.getCharVote(this.selected_round, this.selected_match, 1)],
        backgroundColor: [this.bracket.getColor(this.selected_round, this.selected_match, 0), this.bracket.getColor(this.selected_round, this.selected_match, 1)]
      }]
    }

  //   this.chartOptions = {
  //     series: [this.bracket.getCharVote(this.selected_round, this.selected_match, 0), this.bracket.getCharVote(this.selected_round, this.selected_match, 1)],
  //     chart: {width: 380, type: "pie"},
  //     colors: [this.bracket.getColor(this.selected_round, this.selected_match, 0), this.bracket.getColor(this.selected_round, this.selected_match, 1)],
  //     fill: {
  //       type: 'image',
  //       opacity: 1.0, 
  //       image: {
  //         src: [this.bracket.getCharString(this.selected_round, this.selected_match, 0), this.bracket.getCharString(this.selected_round, this.selected_match, 1)],
  //         width: 25,
  //         imagedHeight: 25
  //       }
  //     },
  //     stroke: {
  //       width: 4
  //     },
  //     dataLabels: {
  //       enabled: false,
  //       style: {
  //         colors: ['#111']
  //       },
  //       background: {
  //         enabled: true,
  //         foreColor: '#fff',
  //         borderWidth: 0
  //       }
  //     },
  //     responsive: [{
  //       breakpoint: 480,
  //       options: {
  //         chart: {
  //           width: 200
  //         },
  //         legend: {
  //           position: 'bottom'
  //         }
  //       }
  //     }]
  //     };
  // }
}}
