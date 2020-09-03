import { Component, OnInit } from '@angular/core';
import { MenuContentComponent } from '../menu-content/menu-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  public isMobile: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(this.isMobile);
  }
  // showMenu() {
  //   const dialogRef = this.dialog.open(MenuContentComponent, {
  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     height: '80vh',
  //     width: '100vw',
  //     position: { left: '0', top: '0' }
  //   });

  // }
}
