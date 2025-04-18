import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from "../../../shared/logo/logo.component";
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { LinksComponent } from "../nav-bar/links/links.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LinksComponent, LogoComponent, TranslateModule, CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  showMenu = false;

  toggleMenu() {
    if (this.showMenu == false) {
      this.showMenu = true;
      //console.log("sdg");
    } else { this.showMenu = false }
  }

  constructor(private translate: TranslateService) {
    this.showMenu = false;
  }

  getLanguage1() {
    if (this.translate.currentLang == "de") {
      return "#02F4BF"
    }
    else {
      return "#E15544"

    } // E15544
  };


  getLanguage2() {
    if (this.translate.currentLang == "en") {
      return "#02F4BF"
    }
    else {
      return "#E15544"
    }
  };


  useLanguage(language: string): void {
    //write language to local storage
    //localStorage.setItem("lang", language);
    this.translate.use(language);
  }





}
