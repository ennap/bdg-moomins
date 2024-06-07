import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit{
  @Input() width:number = 100;
  @Input() height:number = 50;

  @Input() match_total:number = 8;
  @Input() votes:number = 2;

  @Input() color:string = 'blue';

  // determines direction of bracket; true means winning item is below current item, false means winning item is above
  @Input() down:boolean = true;

  h_value:number = 0;
  v_value:number = 0;


  ngOnInit(): void {
    this.calculate_vals();
  }

  calculate_vals() {
    var vote_percent = this.votes/this.match_total;
    var vote_length = vote_percent * (this.width + this.height);

    if (vote_length <= this.width) {
      this.h_value = vote_length;
    }
    else {
      this.h_value = this.width;
      this.v_value = vote_length - this.width;
    }

  }

}
