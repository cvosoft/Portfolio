import { Component } from '@angular/core';
import { NavBarComponent } from "./../main-content/hero-section/nav-bar/nav-bar.component";
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavBarComponent,TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    //console.log(this.translate.currentLang);
  }

}
