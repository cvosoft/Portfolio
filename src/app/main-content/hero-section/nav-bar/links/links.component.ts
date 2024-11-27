import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-links',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
