import { Component } from '@angular/core';
import { Desktop } from './dektop.model';
import { MarketModalComponent } from '../market-modal/market-modal.component';
import { MenuContentComponent } from '../menu-content/menu-content.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as data from '../../config/application.json';
import { motion } from 'src/app/animations';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss'],
  animations: [
    motion.MoveRight,
    motion.ZoomIN,
    motion.MoveLeft
  ]
})
export class DesktopViewComponent {





  // scroll= window.requestAnimationFrame || function(callback) {window.setTimeout(callback,1000/60)};
  // elementsToShow = document.querySelectorAll('.show-on-scroll');
  // loop() {

  //   this.elementsToShow.forEach(element => {

  //     if(isElementInViewPort(element)) {
  //       element.classList.add('is-visible');
  //     }else{

  //       element.classList.remove('is-visible');

  //     }

  //   });
  //   scroll(loop);

  // }

  // loop();

  //   isElementInViewport(el) {
  //   var rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  //   );
  // }


  playPromVideo: boolean;
  // elementsToShow:[];

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
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  showMenu() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(MenuContentComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      // height: '65vh',
      width: '100vw',
      position: { left: '0', top: '0' }
    });

  }


}