import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./main-content/hero-section/nav-bar/nav-bar.component";
import { HeroSectionComponent } from "./main-content/hero-section/hero-section.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { WhyMeComponent } from "./main-content/why-me/why-me.component";
import { ReferencesComponent } from "./main-content/references/references.component";
import { MyProjectsComponent } from "./main-content/my-projects/my-projects.component";
import { MySkillsComponent } from "./main-content/my-skills/my-skills.component";
import { ContactComponent } from "./main-content/contact/contact.component";
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, HeroSectionComponent, FooterComponent, WhyMeComponent, MyProjectsComponent, ReferencesComponent, MySkillsComponent, ContactComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';




}
