import { Component, OnInit } from '@angular/core';
import { MarketModalComponent } from '../market-modal/market-modal.component';

import { MatDialog } from '@angular/material/dialog';

import * as data from '../../config/application.json';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit {
  public appData: any = [];
  public playVideo: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.appData = (data as any).default;
  }

  // public mobileVideo = document.getElementById('mobileVideo');
  //   this.mobileVideo.addEventListener('click', function () {
  //     this.mobileVideo.pause()

  //   });
  // this.mobileVideo.addEventListener('ended', function () {
  //   this.mobilePromsocialVideo.style.display = "none";
  //   this.mobileJumpingGirl.style.display = "block";
  // });
  playMobilePromsocialVideo() {
    this.playVideo = true;
    // var mobileJumpingGirl = document.getElementById("mobileJumpingGirl");
    // var mobilePromsocialVideo = document.getElementById("mobilePromsocialVideo");
    // mobileJumpingGirl.style.display = "none";
    // mobilePromsocialVideo.style.display = "block";
    // mobileVideo.play();
    // mobileVideo.muted = false;
  }

  showMarketModal() {
    const dialogRef = this.dialog.open(MarketModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
