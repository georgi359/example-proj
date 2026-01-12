import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  HostBinding,
  HostListener,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent {
  @Input() backgroundImage?: string;
  @Input() fixedBackground = true;
  @Input() backgroundColor = 'var(--surface-800-80)';
  @Input() fadeOnScroll = false;
  @Input() contentPosition: 'left' | 'center' | 'right' = 'center';
  @Input() height: string = '90vh';

  @HostBinding('style.opacity') opacity = 1;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onScroll() {
    if (!this.fadeOnScroll) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const tileCenter = rect.top + rect.height / 2;

    const distance = Math.abs(viewportCenter - tileCenter);
    const maxDistance = window.innerHeight / 2;

    // Fade only as tile moves away from center
    this.opacity = Math.max(0, 1 - distance / maxDistance);
  }

  get backgroundStyle() {
    return {
      backgroundImage: this.backgroundImage
        ? `url(${this.backgroundImage})`
        : 'none',
      backgroundAttachment: this.fixedBackground ? 'fixed' : 'scroll',
      backgroundColor: this.backgroundColor,
      height: this.height
    };
  }
}
