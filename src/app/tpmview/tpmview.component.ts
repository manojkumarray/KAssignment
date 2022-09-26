import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-tpmview',
  templateUrl: './tpmview.component.html',
  styleUrls: ['./tpmview.component.scss']
})
export class TpmviewComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogData, {
      
    });
  }

}

@Component({
  selector: 'data-dialog',
  templateUrl: 'data-dialog.html',
})
export class DialogData {
  constructor() {}
}