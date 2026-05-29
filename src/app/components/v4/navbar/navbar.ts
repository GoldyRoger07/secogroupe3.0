import { Component, Input } from '@angular/core';
import { HamburgerBtn } from "../../hamburger-btn/hamburger-btn";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'v4-navbar',
  imports: [HamburgerBtn, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input()
  isTransparent = false

  onClickMenuBtn(button: HamburgerBtn,mobileMenu: any) {
    button.isOpen = !button.isOpen
    mobileMenu.classList.toggle("open")
  }

}
