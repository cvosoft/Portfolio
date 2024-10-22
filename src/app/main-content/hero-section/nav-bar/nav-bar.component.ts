import { Component } from '@angular/core';
import { LogoComponent } from "../../../shared/logo/logo.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
