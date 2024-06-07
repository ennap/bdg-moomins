import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent{
  @Input() src:string = "../assets/empty.png";
  @Input() x:string = "0";
  @Input() y:string = "0";
  @Input() size:string = "130";
}
