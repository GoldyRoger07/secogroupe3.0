import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelector } from "../language-selector/language-selector";

@Component({
  selector: 'navbar',
  imports: [CommonModule, LanguageSelector],
  templateUrl: './navbar.html',
  styles: ``
})
export class Navbar {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
