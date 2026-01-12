import { Component, HostListener } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslocoModule, UpperCasePipe, RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropdownOpen = false;
  mobileMenuOpen = false;
  mobileDropdownOpen = false;

  constructor(private transloco: TranslocoService) {}

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Close desktop dropdown when opening mobile menu
    if (this.mobileMenuOpen) {
      this.dropdownOpen = false;
    }
  }

  toggleMobileDropdown(): void {
    this.mobileDropdownOpen = !this.mobileDropdownOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileDropdownOpen = false;
  }

  toggleLang(): void {
    const current = this.transloco.getActiveLang();
    const next = current === 'en' ? 'bg' : 'en';
    this.transloco.setActiveLang(next);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Close dropdown if click is outside
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    }
    
    // Close mobile menu if click is outside
    if (this.mobileMenuOpen && !(event.target as HTMLElement).closest('.mobile-menu-toggle') && 
        !(event.target as HTMLElement).closest('.mobile-menu')) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    // Close mobile menu when switching to desktop
    if (window.innerWidth >= 992 && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
// import { Component, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
// import { UpperCasePipe } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [TranslocoModule, UpperCasePipe, RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements AfterViewInit, OnDestroy {
//   dropdownOpen = false;
//   private languageButton?: HTMLElement | null;
//   private boundToggleLang?: EventListener;

//   constructor(private host: ElementRef<HTMLElement>, private transloco: TranslocoService) {}

//   // toggleDropdown(event: MouseEvent) {
//   //   // prevent the document click handler from immediately closing the panel
//   //   event.stopPropagation();
//   //   this.dropdownOpen = !this.dropdownOpen;
//   // }

//   ngAfterViewInit(): void {
//     // wire the language button without touching HTML
//     this.languageButton = this.host.nativeElement.querySelector('.language-button');
//     if (this.languageButton) {
//       this.boundToggleLang = this.toggleLang.bind(this) as EventListener;
//       this.languageButton.addEventListener('click', this.boundToggleLang);
//     }
//   }

//   ngOnDestroy(): void {
//     if (this.languageButton && this.boundToggleLang) {
//       this.languageButton.removeEventListener('click', this.boundToggleLang);
//     }
//   }

//   private toggleLang(): void {
//     const current = this.transloco.getActiveLang();
//     const next = current === 'en' ? 'bg' : 'en';
//     this.transloco.setActiveLang(next);
//   }

//   @HostListener('document:click', ['$event'])
//   onDocumentClick(event: Event) {
//     if (!this.host.nativeElement.contains(event.target as Node)) {
//       this.dropdownOpen = false;
//     }
//   }

//   @HostListener('document:keydown.escape')
//   onEscape() {
//     this.dropdownOpen = false;
//   }
// }

