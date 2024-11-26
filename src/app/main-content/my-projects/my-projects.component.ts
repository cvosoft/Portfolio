import { CommonModule, isPlatformBrowser } from '@angular/common';
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
    // this.translate.addLangs(['de', 'en']);
    // this.translate.setDefaultLang('de');
    // this.translate.use('de');
    //console.log(this.translate.currentLang);
  }

 

  projectsList = [
    {
      name: "Join",
      skills: "JavaScript | HTML | CSS | Firebase",
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      textde: "Ein Kanban-Taskmanager: Erstelle und organisiere Aufgaben mithilfe von Drag & Drop, weise den Aufgaben Benutzer und Kategorien zu.",
      img: "joinscreenshot.png",
      liveURL: "https://join.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/Join",
    },
    {
      name: "El Pollo Loco",
      skills: "JavaScript | HTML | CSS",
      textde: "Ein Jump&Run programmiert mithilfe eines objektorientierten Ansatzes: Hilf Pepe dabei, Münzen und Salsaflaschen zu finden, um die Endgegner zu besiegen.",
      text: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "pollolocoscreenshot.png",
      liveURL: "https://epl.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/JumpNRun",
    },
    {
      name: "DA Bubble",
      skills: "Angular | TypeScript | HTML | CSS",
      textde: "Diese App ist ein 'Slack'-Clone: Durch die intuitive Bedienung und Echtzeit-Nachrichten revolutioniert es die Kommunikation und Zusammenarbeit in Gruppen.",
      text: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      img: "dabubblescreenshot.png",
      liveURL: "",
      gitURL: "",
    }
  ]

}
