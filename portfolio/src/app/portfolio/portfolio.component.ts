import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const fadeElems = this.el.nativeElement.querySelectorAll('.opacityImg, .opacityReverseImg');
    fadeElems.forEach((elem: HTMLElement) => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {  // 90% vom Viewport
        elem.classList.add('in-view');
      }
    });
  }
}
