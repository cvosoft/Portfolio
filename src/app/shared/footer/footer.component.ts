import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../shared/logo/logo.component"
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {




}
