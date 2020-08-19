import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() onUpload = new EventEmitter<any>();
  public srcResult:any;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
      reader.readAsArrayBuffer(inputNode.files[0]);
      this.onUpload.emit(this.srcResult);
    }
  }

}
