import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prom-blogs',
  templateUrl: './prom-blogs.component.html',
  styleUrls: ['./prom-blogs.component.scss']
})
export class PromBlogsComponent {

  promsocialBlog = [{
    id: '1',
    image: '../../../assets/images/exampleimages/newsfeedfour.png',
    title: 'We are coming with new feature:VIRTUAL PROM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }, {
    id: '2',
    image: '../../../assets/images/exampleimages/flowers.jpg',
    title: 'The Best Makeup Looks From Spring 2019 Runways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }, {
    id: '3',
    image: '../../../assets/images/exampleimages/newsfeedone.jpg',
    title: 'Five things to remember while going for a prom',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }, {
    id: '4',
    image: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
    title: 'The Best Makeup Looks From Spring 2019 Runways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }, {
    id: '5',
    image: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
    title: 'How to use VirtualProm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }, {
    id: '6',
    image: '../../../assets/images/exampleimages/flowers.jpg',
    title: 'How to use VirtualProm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ea provident est qui similique neque nobis tempore ab, at sequi aut repellendus fuga'
  }];

  constructor() { }

  // ngOnInit(): void {
  // }

}
