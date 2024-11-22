import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";
import AOS from 'aos';

@Component({
  selector: 'app-i-am-container',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './i-am-container.component.html',
  styleUrl: './i-am-container.component.scss'
})
export class IAmContainerComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  toggler: boolean = true;

  workIconHover: boolean = false;

  ngOnInit() {
    AOS.init();
  }

}
