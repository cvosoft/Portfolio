import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'legalnotice', component: LegalNoticeComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent }
];
