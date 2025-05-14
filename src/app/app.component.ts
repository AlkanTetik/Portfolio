import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboveTheFoldComponent, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
