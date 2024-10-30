import { Component } from '@angular/core';
import { LogoComponent } from "../../../shared/logo/logo.component";
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoComponent, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }


  useLanguage(language: string): void {
    this.translate.use(language);
  }


}
