// import { CommonModule } from '@angular/common';
// import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-testimonial',
//   standalone: true,
//   templateUrl: './testimonial.component.html',
//   styleUrls: ['./testimonial.component.scss'],
//   imports: [CommonModule, TranslateModule]
// })
// export class TestimonialComponent implements AfterViewInit {
//   constructor(private el: ElementRef) {}

//   ngAfterViewInit() {
//     this.checkScroll();
//   }

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.checkScroll();
//   }

//   checkScroll() {
//     const fadeElems = this.el.nativeElement.querySelectorAll('.fade-right, .fade-left');
//     fadeElems.forEach((elem: HTMLElement) => {
//       const rect = elem.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight * 0.9) {
//         elem.classList.add('in-view');
//       }
//     });
//   }

//   testimonials = [
//     {
//       quote: "Alkan really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
//       name: "V. Schuster",
//       role: "Team Partner",
//       image: "assets/testimonial2.jpg"  
//     },
//     {
//       quote: "Alkan always brought fresh ideas to the table and helped us overcome tough challenges. His creativity really made a difference in the project.",
//       name: "Robert",
//       role: "Design Lead",
//       image: "assets/testimonial3.jpg"
//     },
//     {
//       quote: "Alkan was incredibly reliable and technically strong. He solved issues before they even became problems. A true asset to the team.",
//       name: "Hasan",
//       role: "Frontend Developer",
//       image: "assets/testimonial1.png"
//     }
//   ];

//   currentIndex = 0;

//   next() {
//     this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
//   }

//   prev() {
//     this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
//   }

//   goToSlide(index: number) {
//     this.currentIndex = index;
//   }

// }

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  imports: [CommonModule, TranslateModule]
})
export class TestimonialComponent implements OnInit, AfterViewInit, OnDestroy {
  testimonials: { quote: string; name: string; role: string; image: string }[] = [];
  currentIndex = 0;
  private langChangeSub!: Subscription;

  constructor(private el: ElementRef, private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTestimonials();

    // Reagiere auf Sprachwechsel
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  ngAfterViewInit() {
    this.checkScroll();
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  loadTestimonials(): void {
    this.translate.get('TESTIMONIALS').subscribe((res: any[]) => {
      this.testimonials = [
        {
          quote: res[0].QUOTE,
          name: res[0].NAME,
          role: res[0].ROLE,
          image: 'assets/testimonial2.jpg'
        },
        {
          quote: res[1].QUOTE,
          name: res[1].NAME,
          role: res[1].ROLE,
          image: 'assets/testimonial3.jpg'
        },
        {
          quote: res[2].QUOTE,
          name: res[2].NAME,
          role: res[2].ROLE,
          image: 'assets/testimonial1.png'
        }
      ];
    });
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
      if (rect.top < windowHeight * 0.9) {
        elem.classList.add('in-view');
      }
    });
  }

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
