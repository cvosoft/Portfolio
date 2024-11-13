import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }


  toggler:boolean = true;

}
