import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogFormService } from '../../../blog-form.service';



@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm: any;
  blogType: any;
  subBlogType: any;
  stepLevel: any;
  blogs: any;
  companyLogo: any;
  constructor(private formBuilder: FormBuilder, private router: Router, public blogFormService: BlogFormService) {
    this.blogForm = this.formBuilder.group({
      type: '',
      coverTitle: '',
      coverTitleImage: '',
      coverImage: '',
      coverImageCaption: '',
      coverVideo: '',
      coverVideoCaption: '',
      link: '',
      linkCaption: '',
      subBlog: this.formBuilder.array([])
    })
  }


  createSubBlog(): FormGroup {
    return this.formBuilder.group({
      subType: '',
      text: '',
      subTitle: '',
      image: '',
      imageCaption: '',
      video: '',
      videoCaption: '',
      link: '',
      linkCaption: '',
      specificText: ''
    });
  }

  get subBlogFormArray() {
    return this.blogForm.get('subBlog') as FormArray;
  }

  changeBlogType(event: any) {
    this.blogType = event.value;
    // console.log(event);
  }

  addNewBlog() {
    this.subBlogFormArray.push(this.createSubBlog());
  }

  deleteSubBlog(index) {
    this.subBlogFormArray.removeAt(index);
  }

  selectSubBlogType(event: any) {
    this.subBlogType = event.value;
  }

  onFormSubmit(form: any) {
    console.log("submit clicked");
    console.log(form);
    this.blogFormService.blogFormObject = this.blogForm.value;
  }

  uploadImage(event: any, index: any, type: String) {
    var image = document.getElementById('file' + index);
    if (image['files'].length > 0) {
      var ext = image['files'][0].name.match(/\.([^\.]+)$/)[1];
      if (ext == 'jpg' || ext == 'png' || ext == 'jpeg') {
        this.getBase64Image(image['files'][0], index, type);
      } else {
        console.log("error", 'Please upload only Images');
      }
    }
  }

  getBase64Image(file, i, type) {
    let me = this;
    const index = i;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      var image: any = new Image();
      image.src = reader.result;
      image.onload = function () {
        me.companyLogo = reader.result;
        if (index >= 0) {
          me.blogForm.controls.subBlog.controls[index].controls.image.setValue(me.companyLogo);
        } else {
          me.blogForm.controls[type].setValue(me.companyLogo);
        }
        // var height = this['height'];
        // var width = this['width'];
        // if ((height >= 150 && width >= 150) && (height <= 500 && width <= 500)) {
        //     if (height == width) {
        //         me.companyLogo = reader.result;
        //     } else {
        //         alert('Please upload images with same height and width with minimum 150px and maximium 500px dimensions.');
        //     }
        //     return true
        // } else {
        //     alert('Please upload images with same height and width with minimum 150px and maximium 500px dimensions.');
        //     return false;
        // }
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }



  ngOnInit(): void {
  }

}
