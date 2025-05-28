import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const fadeElems = this.el.nativeElement.querySelectorAll('.fade-left, .fade-right');
    fadeElems.forEach((elem: HTMLElement) => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 7) {  // 90% vom Viewport
        elem.classList.add('in-view');
      }
    });
  }
}
