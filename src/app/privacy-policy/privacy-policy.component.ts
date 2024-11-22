import { Component } from '@angular/core';
import { NavBarComponent } from "./../main-content/hero-section/nav-bar/nav-bar.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
