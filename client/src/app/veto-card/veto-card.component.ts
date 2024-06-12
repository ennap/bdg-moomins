import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-veto-card',
  templateUrl: './veto-card.component.html',
  styleUrls: ['./veto-card.component.scss']
})
export class VetoCardComponent {

  previousY: number | null = null;

  onDragMoved(event: CdkDragMove) {
    const Yposition = event.pointerPosition.y;

    if (this.previousY !== null) {
      if (Yposition > this.previousY) {
        console.log('Dragging down');
        
      } else if (Yposition < this.previousY) {
        console.log('Dragging up');
        
      }
    }

    this.previousY = Yposition;
  }

}
