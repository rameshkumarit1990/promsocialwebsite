import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-preview',
  templateUrl: './desktop-preview.component.html',
  styleUrls: ['./desktop-preview.component.scss']
})
export class DesktopPreviewComponent implements OnInit {
  @Input('desktopPreview') public desktopPreview;
  public previewData: any

  constructor() { }

  ngOnInit(): void {
    this.previewData = this.desktopPreview;
  }

}
