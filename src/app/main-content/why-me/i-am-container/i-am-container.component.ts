import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-i-am-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i-am-container.component.html',
  styleUrl: './i-am-container.component.scss'
})
export class IAmContainerComponent {


  toggler: boolean = true;

  workIconHover: boolean = false;

}
