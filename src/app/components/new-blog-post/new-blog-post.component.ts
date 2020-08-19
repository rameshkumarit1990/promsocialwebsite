import { Component, OnInit } from '@angular/core';
import { BlogFormService } from '../../blog-form.service';


@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.scss']
})
export class NewBlogPostComponent implements OnInit {

  stepLevel: any;
  public preview = {
    type: '',
    coverTitle: '',
    coverTitleImage: '',
    coverImage: '',
    coverImageCaption: '',
    coverVideo: '',
    coverVideoCaption: '',
    link: '',
    linkCaption: '',
    subBlog: []

  }


  constructor(public blogFormService: BlogFormService) {

  }
  previewClicked(event) {
    this.stepLevel = event.selectedStep.label;
    if (this.stepLevel == "Desktop Preview") {
      this.preview = Object.assign(this.preview, this.blogFormService.blogFormObject);

    }
    if (this.stepLevel == "Mobile Preview") {
      this.preview = Object.assign(this.preview, this.blogFormService.blogFormObject);

    }
  }

  ngOnInit(): void {
  }

}
