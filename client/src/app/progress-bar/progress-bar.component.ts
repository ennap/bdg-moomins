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
  h_final: number = 0;
  v_final: number = 0;
  remainder: number = 0;
  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async increment() {
    var increment_value = (this.width + this.height)/50;
    for (let i=0; i<100; i++) {
        if (this.h_value < this.h_final) {
          if (this.h_value + increment_value < this.h_final) {
            this.h_value += increment_value;
          }
          else{
            this.remainder = (this.h_value + increment_value) - this.h_final;
            this.h_value = this.h_final;
          }
        }
        else {
          if (this.remainder != 0) {
            this.v_value = this.remainder;
            this.remainder = 0;
          }
          if (this.v_value + increment_value < this.v_final){
            this.v_value += increment_value;
          }
          else {
            this.v_value = this.v_final;
          }
        }
        await this.sleep(5)
    };
  };

  ngOnChanges(): void {
    this.calculate_vals();
    this.increment();

  };

  calculate_vals() {
    var vote_percent = this.votes/this.match_total;
    var vote_length = vote_percent * (this.width + this.height);

    if (vote_length <= this.width) {
      this.h_final = vote_length;
    }
    else {
      this.h_final = this.width;
      this.v_final = vote_length - this.width;
    }
}}
