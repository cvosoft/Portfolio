import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  challengeHover: boolean = false;

  skillsList = [
    {
      name: "JavaScript",
      img: "js.svg"
    },
    {
      name: "Linux",
      img: "Linux.svg"
    },
    {
      name: "Shell Scripting",
      img: "Shell-Scripting.svg"
    },    
    {
      name: "Python",
      img: "Python.svg"
    },
    
    {
      name: "Django",
      img: "Django.svg"
    },
    {
      name: "DRF",
      img: "DRF.svg"
    },    
    {
      name: "php",
      img: "php.svg"
    },       
    {
      name: "SQL",
      img: "SQL.svg"
    },    
    {
      name: "Matlab",
      img: "matlab.svg"
    },
    {
      name: "Octave",
      img: "octave.svg"
    },        
    {
      name: "R",
      img: "r.svg"
    },     
    {
      name: "Angular",
      img: "ang.svg"
    },
    {
      name: "TypeScript",
      img: "ts.svg"
    },

    {
      name: "HTML",
      img: "html.svg"
    },
    {
      name: "CSS",
      img: "css.svg"
    },
    {
      name: "Rest-Api",
      img: "rest.svg"
    },
    {
      name: "Firebase",
      img: "firebase.svg"
    },
    {
      name: "GIT",
      img: "git.svg"
    },

   
    {
      name: 'Challenge me',
      img: "chall.svg"
    }
  ];


}

//{
//  name: "Material<br>design",
//  img: "matdes.svg"
//},
// {
//   name: "Scrum",
//   img: "scrum.svg"
// },