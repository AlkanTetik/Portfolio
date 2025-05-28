import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  imports: [CommonModule]
})
export class TestimonialComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const fadeElems = this.el.nativeElement.querySelectorAll('.fade-right, .fade-left');
    fadeElems.forEach((elem: HTMLElement) => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {  // 90% vom Viewport
        elem.classList.add('in-view');
      }
    });
  }

  testimonials = [
    {
      quote: "Alkan really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      name: "V. Schuster",
      role: "Team Partner",
      image: "assets/testimonial2.jpg"  // Bildpfad anpassen
    },
    {
      quote: "Alkan always brought fresh ideas to the table and helped us overcome tough challenges. His creativity really made a difference in the project.",
      name: "Robert",
      role: "Design Lead",
      image: "assets/testimonial3.jpg" // Bildpfad anpassen
    },
    {
      quote: "Alkan was incredibly reliable and technically strong. He solved issues before they even became problems. A true asset to the team.",
      name: "Hasan",
      role: "Frontend Developer",
      image: "assets/testimonial1.png" // Bildpfad anpassen
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
