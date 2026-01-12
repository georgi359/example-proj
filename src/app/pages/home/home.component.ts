import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { NavSpacerComponent } from '../../components/layout/nav-spacer/nav-spacer.component';
import { TileComponent } from '../../components/layout/tile/tile.component';
import { LogoCarouselComponent } from '../../components/layout/logo-carousel/logo-carousel.component';
import { FaCardComponent } from "../../components/common/fa-card/fa-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslocoModule, NavSpacerComponent,
     TileComponent, LogoCarouselComponent, FaCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
