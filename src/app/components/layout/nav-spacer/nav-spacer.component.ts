import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-spacer',
  templateUrl: './nav-spacer.component.html',
  styleUrls: ['./nav-spacer.component.css']
})
export class NavSpacerComponent {
  /** Height of the navbar to offset content */
  @Input() height: string = '6rem';
}
