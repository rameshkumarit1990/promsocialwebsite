import { Component } from '@angular/core';
import { Desktop } from './dektop.model';
import { MarketModalComponent } from '../market-modal/market-modal.component';
import { MatDialog } from '@angular/material/dialog';
import * as data from '../../config/application.json';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss']
})
export class DesktopViewComponent {

  playPromVideo: boolean;

  desktopView: any = [];

  constructor(public dialog: MatDialog) {
    this.desktopView = (data as any).default;
  }

  closePromVideo(event: any) {
    if (!this.playPromVideo) {
      this.playPromVideo = true;
      event.stopPropagation();
    }
  }

  // showMarketModal() {
  //   const marketDirectoryVideo = document.getElementById("marketDirectoryVideo");
  //   marketDirectoryVideo['muted'] = false;
  //   marketDirectoryVideo['currentTime'] = 0.0000;
  // }

  hideMarketModal(event) {
    if (event.target.classList.contains('show')) {
      const marketDirectoryVideo = document.getElementById("marketDirectoryVideo");
      marketDirectoryVideo['muted'] = true;
    }
  }

  showMarketModal() {
    const dialogRef = this.dialog.open(MarketModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}