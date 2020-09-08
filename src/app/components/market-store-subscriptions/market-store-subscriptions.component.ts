import { Component, OnInit } from '@angular/core';
import { motion } from 'src/app/animations';


@Component({
  selector: 'app-market-store-subscriptions',
  templateUrl: './market-store-subscriptions.component.html',
  styleUrls: ['./market-store-subscriptions.component.scss'],
  animations: [
    motion.MoveRight,
    motion.ZoomIN,
    motion.MoveLeft
  ]
})
export class MarketStoreSubscriptionsComponent {

  constructor() { }

  // ngOnInit(): void {
  // }

}
