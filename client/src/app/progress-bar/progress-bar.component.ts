import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  width:number = 100;
  height:number = 50;
  total_votes:number = 4;
  votes:number = 1;
}
