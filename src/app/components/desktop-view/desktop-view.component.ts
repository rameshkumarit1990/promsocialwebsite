import {
    Component,
    HostListener
}

    from '@angular/core';

import {
    Desktop
}

    from './dektop.model';

import {
    MarketModalComponent
}

    from '../market-modal/market-modal.component';

import {
    MenuContentComponent
}

    from '../menu-content/menu-content.component';

import {
    MatDialog,
    MatDialogConfig
}

    from '@angular/material/dialog';
import * as data from '../../config/application.json';

import {
    motion
}

    from 'src/app/animations';

@Component({
    selector: 'app-desktop-view',
    templateUrl: './desktop-view.component.html',
    styleUrls: ['./desktop-view.component.scss'],
    animations: [motion.MoveRight,
    motion.ZoomIN,
    motion.MoveLeft]
}

) export class DesktopViewComponent {

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

    // contentIsInViewPort: boolean;
    isInViewPort: boolean;
    // trackByMethod(index: number, content: any): number {
    //     console.log(index)
    //     return content.isInViewPort;
    // }

    // @HostListener('scroll', ['$event'])
    // scrollHandler(_event) {

    //     const isInvisible = document.querySelector('.isInvisible');
    //     const rect = isInvisible.getBoundingClientRect();


    //     if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight * 1.5 || document.documentElement.clientHeight * 1.5) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    //         this.isInViewPort = true;
    //         console.dir(isInvisible);
    //     }

    //     else if (rect.top <= (-window.innerHeight * 0.5 || -document.documentElement.clientHeight * 0.5)) {
    //         this.isInViewPort = false;
    //     }

    // }




    // if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {

    //     this.isInViewPort = true;

    // }

    // else {
    //     this.isInViewPort = false;

    // }

    // for (let i = 0; i < 3; i++) {
    //     console.log ("Block statement execution no." + i);
    //   }

    // @HostListener('scroll', ['$event']) scrollHandler(event: {
    //     target: any;
    // }

    // ) {
    //     console.log(event.target);
    //     const isInvisible = document.querySelector('.isInvisible');
    //     const rect = isInvisible.getBoundingClientRect();

    //     if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight * 1.5 || document.documentElement.clientHeight * 1.5) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {

    //         this.isInViewPort = true;

    //     }

    //     else if (rect.top <= (-window.innerHeight * 0.5 || -document.documentElement.clientHeight * 0.5)) {
    //         this.isInViewPort = false;

    //     }

    // }


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
            height: '60vh',
            width: '100vw',
            position: {
                left: '0', top: '0'
            }
        }

        );

    }


}