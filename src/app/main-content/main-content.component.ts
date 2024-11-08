import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ContactComponent } from "./contact/contact.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { ReferencesComponent } from "./references/references.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { NavBarComponent } from "./hero-section/nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent, HeroSectionComponent, ContactComponent, WhyMeComponent, ReferencesComponent, MyProjectsComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
