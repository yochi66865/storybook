import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sample',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.less'],
})
export class DragScrollComponent implements OnInit, AfterViewInit {
  @ViewChild('nav') ds!: DragScrollComponent;


  ngAfterViewInit() {
    console.log("ggggggggggggg", this.ds)
    // Starting ngx-drag-scroll from specified index(3)
    setTimeout(() => {
      this.ds.moveTo(3);
    }, 1000);
  }

  ngOnInit(): void {
  }


  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index: number) {
    this.ds.moveTo(index);
  }
}
