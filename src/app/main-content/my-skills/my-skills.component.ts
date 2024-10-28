import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillsList = [
    {
      name: "Angular",
      img: "ang.svg"
    },
    {
      name: "TypeScript",
      img: "ts.svg"
    },
    {
      name: "JavaScript",
      img: "js.svg"
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
      img: "fire.svg"
    },
    {
      name: "GIT",
      img: "git.svg"
    },
    {
      name: "Scrum",
      img: "scrum.svg"
    },
    {
      name: "Material Design",
      img: "matdes.svg"
    },
    {
      name: "Challenge me",
      img: "chall.svg"
    }
  ];


}
