import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelector } from "../language-selector/language-selector";
import { SelectModule } from 'primeng/select';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { SelectModule } from 'primeng/select';



@Component({
  selector: 'navbar',
  imports: [SelectModule, CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.html',
  styles: ``
})
export class Navbar {
  isMobileMenuOpen = false;

  countries:SelectType[] = [
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
}
