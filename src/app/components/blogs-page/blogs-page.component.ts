import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['../prom-blogs/prom-blogs.component.scss']
})
export class BlogsPageComponent implements OnInit {

  public submittedBlogs = [
    {
      coverTitleImage: '../../../assets/images/exampleimages/flowers.jpg',
      coverTitle: 'Best consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      coverTitle: 'Top consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
      coverTitle: 'Five consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
      coverTitle: 'Below consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/flowers.jpg',
      coverTitle: 'Beautiful consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
      coverTitle: 'Top tips consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },

  ]


  submittedBlog = this.submittedBlogs;

  constructor() { }

  applyFilter(event: Event) {
    let blogs = this.submittedBlog;
    const filterValue = (event.target as HTMLInputElement).value;
    this.submittedBlogs = blogs.filter(item => item.coverTitle.trim().toLowerCase().indexOf(filterValue) !== -1);
  }
  ngOnInit(): void {
  }

}
