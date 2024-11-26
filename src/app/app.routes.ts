import { ExtraOptions, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';

const extraOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};


export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'legalnotice', component: LegalNoticeComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent }
];
