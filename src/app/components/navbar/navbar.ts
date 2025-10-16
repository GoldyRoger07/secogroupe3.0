import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelector } from "../language-selector/language-selector";
import { SelectModule } from 'primeng/select';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { SelectModule } from 'primeng/select';


import { SelectType } from '../../models/SelectType';

@Component({
  selector: 'navbar',
  imports: [SelectModule, CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.html',
  styles: ``
})

export class Navbar {
  isMobileMenuOpen = false;

  // list of languages for the select
  countries: SelectType[] = [
    {
      name: 'English',
      code: 'English'
    },
    {
      name: 'French',
      code: 'French'
    }
  ]

  selectedCountry: SelectType = this.countries[0]

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Close mobile menu on Escape key for better UX
  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
