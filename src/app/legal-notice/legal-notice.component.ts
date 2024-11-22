import { Component } from '@angular/core';
import { NavBarComponent } from "./../main-content/hero-section/nav-bar/nav-bar.component";
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavBarComponent,TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
