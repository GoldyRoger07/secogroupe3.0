import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelector } from "../language-selector/language-selector";
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { Ripple } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

import { Select } from 'primeng/select';

@Component({
  selector: 'navbar',
  imports: [Select,CommonModule, RouterLink, RouterLinkActive, Ripple, MenubarModule, BadgeModule, AvatarModule ],
  templateUrl: './navbar.html',
  styles: ``
})
export class Navbar implements OnInit{
  isMobileMenuOpen = false;

  items: MenuItem[] | undefined;

  ngOnInit(){
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                ]
            }
    ]
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
