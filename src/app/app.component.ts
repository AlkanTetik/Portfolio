import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboveTheFoldComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    TestimonialComponent,
    ContactFormComponent,
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
