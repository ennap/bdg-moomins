import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent implements OnChanges{
  @Input() src:string = "../assets/empty.png";
  @Input() img: string = "../assets/empty.png";
  @Input() x:string = "0";
  @Input() y:string = "0";
  @Input() size:string = "130";
  @Input() flicker:boolean = true;

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async increment() {
    await this.sleep(500);
    this.img = this.src;
    await this.sleep(300);
    this.img = "../assets/empty.png";
    await this.sleep(300);
    this.img = this.src;
    await this.sleep(300);
    this.img = "../assets/empty.png";
    await this.sleep(300);
    this.img = this.src;
  };

  ngOnChanges(): void{
    if (this.flicker) {
      this.increment();
    }
    else {
      this.img = this.src;
    }
  }
}
