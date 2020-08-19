import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prom-blogs',
  templateUrl: './prom-blogs.component.html',
  styleUrls: ['./prom-blogs.component.scss']
})
export class PromBlogsComponent implements OnInit {
  public submittedBlogs = [
    {
      coverTitleImage: '../../../assets/images/exampleimages/four.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/two.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/three.png',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/one.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/five.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },
    {
      coverTitleImage: '../../../assets/images/exampleimages/flowers.jpg',
      coverTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '

    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
