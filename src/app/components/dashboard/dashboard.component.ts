import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showView: boolean;

  constructor() { }

  // showCardsMenu() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = false;

  //   const dialogRef = this.dialog.open(CardsViewComponent, {

  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     height: '30vh',
  //     width: '100vw',
  //     position: { left: '0', top: '0' }
  //   });

  // }

}
