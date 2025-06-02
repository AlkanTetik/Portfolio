import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  openLegalNotice(event: Event) {
    event.preventDefault(); // verhindert das normale Verhalten des Links
    const url = window.location.origin + '/imprint'; // localhost oder live Domain dynamisch ermitteln
    window.open(url, '_blank', 'noopener,noreferrer');
  }

}
