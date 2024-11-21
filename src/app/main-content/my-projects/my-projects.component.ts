import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    //console.log(this.translate.currentLang);
  }



  projectsList = [
    {
      name: "Join",
      skills: "JavaScript | HTML | CSS | Firebase",
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      textde: "Übersetzung",
      img: "joinscreenshot.png",
      liveURL: "https://join.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/Join",
    },
    {
      name: "El Pollo Loco",
      skills: "JavaScript | HTML | CSS",
      text: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      textde: "Übersetzung",
      img: "pollolocoscreenshot.png",
      liveURL: "https://epl.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/JumpNRun",
    },
    {
      name: "DA Bubble",
      skills: "Angular | TypeScript | HTML | CSS",
      text: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      textde: "Übersetzung",
      img: "dabubblescreenshot.png",
      liveURL: "",
      gitURL: "",
    }
  ]

}
