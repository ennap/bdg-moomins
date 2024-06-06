import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent{
  @Input() src:string = "";
  @Input() x:string = "0%";
  @Input() y:string = "0%";
}
