import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  imports: [CommonModule]
})
export class TestimonialComponent {
  testimonials = [
    {
      quote: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      name: "V. Schuster",
      role: "Team Partner",
      image: "assets/testimonial2.jpg"  // Bildpfad anpassen
    },
    {
      quote: "Robert always brought fresh ideas to the table and helped us overcome tough challenges. His creativity really made a difference in the project.",
      name: "Robert",
      role: "Design Lead",
      image: "assets/testimonial3.jpg" // Bildpfad anpassen
    },
    {
      quote: "Hasan was incredibly reliable and technically strong. He solved issues before they even became problems. A true asset to the team.",
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
