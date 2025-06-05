import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: LegalNoticeComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
];
