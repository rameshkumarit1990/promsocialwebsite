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
      storeName: 'Castle Couture'
    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      storeName: 'Azaria'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
      storeName: 'Windsor'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
      storeName: 'The Black Tux'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/flowers.jpg',
      storeName: 'FragranceNet.com'

    },
    {
      storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      storeName: 'Tom James Company'

    },

  ]
  store = this.Stores
  constructor() { }

  applyFilter(event: Event) {
    let blogs = this.store;
    const filterValue = (event.target as HTMLInputElement).value;
    this.Stores = blogs.filter(item => item.storeName.trim().toLowerCase().indexOf(filterValue) !== -1);
  }

  // ngOnInit(): void {
  // }

}
