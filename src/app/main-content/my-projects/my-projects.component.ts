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
      name: "Coderr",
      skills: "JavaScript | HTML | CSS | Django Rest Framework",
      text: "A Fiverr clone: Log in as a business user and create offers, log in as customer, search, find and order what you are looking for.",
      textde: "Ein Freelancer-Portal wie Fiverr: Erstelle Deine Angebote und lass Dich von Kunden finden.",
      img: "coderr.png",
      buttons: 3,
      liveURL: "https://coderr.christophvoelker.com",
      gitURLBackend: "https://github.com/cvosoft/coderr-backend/",
      buttonText1: "GitHub (Backend)",
      gitURLFrontend: "https://github.com/cvosoft/coderr-frontend/",
      buttonText2: "GitHub (Frontend)"
    },
    {
      name: "Join",
      skills: "JavaScript | HTML | CSS | Firebase oder DRF",
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      textde: "Ein Kanban-Taskmanager: Erstelle und organisiere Aufgaben mithilfe von Drag & Drop, weise den Aufgaben Benutzer und Kategorien zu.",
      img: "joinscreenshot.png",
      liveURL: "https://join.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/Join/",
    },
    {
      name: "El Pollo Loco",
      skills: "JavaScript | OOP | HTML | CSS",
      textde: "Ein Jump&Run programmiert mithilfe eines objektorientierten Ansatzes: Hilf Pepe dabei, Münzen und Salsaflaschen zu finden, um die Endgegner zu besiegen.",
      text: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "pollolocoscreenshot.png",
      liveURL: "https://epl.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/ElPolloLoco/",
    },
    {
      name: "DABubble",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      textde: "Diese App ist ein 'Slack'-Clone: Durch die intuitive Bedienung und Echtzeit-Nachrichten revolutioniert es die Kommunikation und Zusammenarbeit in Gruppen.",
      text: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      img: "dabubblescreenshot.png",
      liveURL: "https://dab.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/DABubble/",
    },
    {
      name: "MUSHRA Drag&Drop",
      buttons: 1,
      skills: "Matlab | Psychoacoustics | Audiology",
      text: "A modification designed to maximise the accessibility of MUSHRA for elderly and technically non-experienced listeners, who constitute the typical target group in hearing aid evaluation.",
      textde: "Eine Modifikation, die darauf ausgelegt ist, die Zugänglichkeit von MUSHRA für ältere und technisch unerfahrene Hörer zu maximieren – die typische Zielgruppe bei der Bewertung von Hörgeräten.",
      img: "mushra.png",
      URL: "https://www.tandfonline.com/doi/full/10.1080/14992027.2016.1220680",
    }
  ]

}
