import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {

  public Stores = [
    {
      storeCoverImage: '../../../assets/images/exampleimages/flowers.jpg',
      store: 'Castle Couture'
    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      store: 'Azaria'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
      store: 'Windsor'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
      store: 'The Black Tux'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/flowers.jpg',
      store: 'FragranceNet.com'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      store: 'Tom James Company'

    },

  ]

  constructor() { }

  // ngOnInit(): void {
  // }

}
