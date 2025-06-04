import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
  }


  openLinkInNewTab(event: MouseEvent, commands: any[]) {
    event.preventDefault();

    const url = this.router.serializeUrl(
      this.router.createUrlTree(commands)
    );

    window.open(url, '_blank');
  }
}
