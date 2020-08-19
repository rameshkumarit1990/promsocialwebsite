import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

  public submittedBlogs = [
    {
      coverTitleImage: '../../../assets/images/exampleimages/flowers.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/flowers.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },

  ]




  constructor() { }

  ngOnInit(): void {
  }

}
