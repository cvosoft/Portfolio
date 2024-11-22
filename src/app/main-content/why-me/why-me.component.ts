import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmContainerComponent } from "../why-me/i-am-container/i-am-container.component";
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";
import AOS from 'aos';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule, CommonModule, IAmContainerComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private translate: TranslateService) {
    //this.translate.addLangs(['de', 'en']);
    //this.translate.setDefaultLang('de');
    //this.translate.use('de');
  }

  ngOnInit() {
    AOS.init();
  }


}
