import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-modal',
  templateUrl: './market-modal.component.html',
  styleUrls: ['./market-modal.component.scss']
})
export class MarketModalComponent {

  constructor(private router: Router) { }

  openMarketSubscriptionPage() {
    this.router.navigate(['/subscription']);
  }

  // ngOnInit(): void {
  // }

}
