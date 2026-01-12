import { Component, Input } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fa-card',
  standalone: true,
  templateUrl: './fa-card.component.html',
  styleUrls: ['./fa-card.component.css'],
})
export class FaCardComponent {
  @Input() color: string = '#d4a44a';
   @Input() icon!: string;
}