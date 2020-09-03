import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {


  slides = [
    { 'image': '../../../assets/images/exampleimages/flowers.jpg' },
    { 'image': '../../../assets/images/exampleimages/NewsFeedImageFive.png' },
    { 'image': '../../../assets/images/exampleimages/flowers.jpg' },
    { 'image': '../../../assets/images/exampleimages/NewsFeedImageFive.png' },
    { 'image': '../../../assets/images/exampleimages/flowers.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
