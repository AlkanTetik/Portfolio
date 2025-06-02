import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboveTheFoldComponent } from "../above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-content',
  imports: [HeaderComponent, AboveTheFoldComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, TestimonialComponent, ContactFormComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
