import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- hinzufügen
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], // <-- CommonModule hinzufügen
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  selectedLang: string;
  currentLang: any;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.selectedLang = savedLang;
    this.currentLang = savedLang;
    this.translate.use(savedLang);
  }

  setActive(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
