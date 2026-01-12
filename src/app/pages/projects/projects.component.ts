import { Component } from '@angular/core';
import { NavSpacerComponent } from '../../components/layout/nav-spacer/nav-spacer.component';
import { TileComponent } from '../../components/layout/tile/tile.component';
import { LogoCarouselComponent } from '../../components/layout/logo-carousel/logo-carousel.component';
import { FaCardComponent } from "../../components/common/fa-card/fa-card.component";

@Component({
  selector: 'app-projects',
  imports: [NavSpacerComponent, TileComponent, LogoCarouselComponent, FaCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

}
