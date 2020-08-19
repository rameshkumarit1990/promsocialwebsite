import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-preview',
  templateUrl: './mobile-preview.component.html',
  styleUrls: ['./mobile-preview.component.scss']
})
export class MobilePreviewComponent implements OnInit {
  @Input('mobilePreview') public mobilePreview;
  public previewData: any

  constructor() { }

  ngOnInit(): void {

    this.previewData = this.mobilePreview;
  }

}
