import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-scroll-animations',
  templateUrl: './scroll-animations.component.html',
  styleUrls: ['./scroll-animations.component.scss']
}

) export class ScrollAnimationsComponent {
  @HostBinding('class.isvisible') isVisibleInView = false;
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting === true) {
        this.isVisibleInView = true;
        // this.observer.disconnect();
      }

      else {
        this.isVisibleInView = false;
      }
    }

      , {
        threshold: 0.75
      }

    );
    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}