import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { TileComponent } from '../../components/layout/tile/tile.component';
import { NavSpacerComponent } from '../../components/layout/nav-spacer/nav-spacer.component';

@Component({
  selector: 'app-financial-statements',
  imports: [CommonModule, TranslocoModule, TileComponent, NavSpacerComponent],
  templateUrl: './financial-statements.html',
  styleUrl: './financial-statements.css',
})
export class FinancialStatements {

}
