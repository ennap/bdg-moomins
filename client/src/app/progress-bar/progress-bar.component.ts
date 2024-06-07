import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges{
  @Input() width:number = 100;
  @Input() height:number = 50;
  @Input() x:number = 0;
  @Input() y:number = 0;

  @Input() match_total:number = 8;
  @Input() votes:number = 0;

  @Input() color:string = 'FF8C42';

  // down and right determine direction of bracket
  @Input() down:boolean = true;
  @Input() right:boolean = true;

  h_value:number = 0;
  v_value:number = 0;


  ngOnChanges(): void {
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

  get_h_value(){
    return this.h_value;
  }

  get_v_value(){
    return this.v_value;
  }

}
