import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const fadeElems = this.el.nativeElement.querySelectorAll('.fade-down, .fade-up');
    fadeElems.forEach((elem: HTMLElement) => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {  // 90% vom Viewport
        elem.classList.add('in-view');
      }
    });
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  isDisabled = true;

  post = {
    endPoint: 'https://alkan-tetik.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'text' as const
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}