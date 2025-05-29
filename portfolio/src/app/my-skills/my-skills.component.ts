import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const fadeElems = this.el.nativeElement.querySelectorAll('section');
    fadeElems.forEach((elem: HTMLElement) => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {  // 90% vom Viewport
        elem.classList.add('in-view');
      }
    });
  }
}