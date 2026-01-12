import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-logo-carousel',
  imports: [CommonModule],
  templateUrl: './logo-carousel.component.html',
  styleUrls: ['./logo-carousel.component.css']
})
export class LogoCarouselComponent implements AfterContentInit {
  @Input() images: string[] = [];
  @Input() speed = 15; // seconds for one full loop

  @ContentChildren('*', { descendants: true })
  projectedContent!: QueryList<ElementRef>;

  hasProjectedContent = false;

  ngAfterContentInit() {
    this.hasProjectedContent = this.projectedContent.length > 0;
  }
}
