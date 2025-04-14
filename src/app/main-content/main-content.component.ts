import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ContactComponent } from "./contact/contact.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { ReferencesComponent } from "./references/references.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { NavBarComponent } from "./hero-section/nav-bar/nav-bar.component";
import { TranslateService } from '@ngx-translate/core';
import { CvComponent } from "./cv/cv.component";


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent, HeroSectionComponent, ContactComponent, WhyMeComponent, CvComponent, MyProjectsComponent, MySkillsComponent, CvComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

 
  constructor(private translate: TranslateService) {
  }



}
