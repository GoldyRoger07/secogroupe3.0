import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Container } from "../container/container";
import { LinkItem } from "../link-item/link-item";
import { HamburgerBtn } from "../hamburger-btn/hamburger-btn";
import { SelectType } from '../../models/SelectType';
import { Select } from "primeng/select";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

export class NavbarConfig{
  // logo?: string;
  // logoWidth?: string;
  // links?: Link[];
  // showSearch?: boolean;
  // bgColor?: string;
  // textColor?: string;

  constructor(
    public logo = "img/logos/new_seco_logo.png",
    public logoWidth = "100px",
    public links: Link[] = [],
    public showSearch = false,
    public bgColor = "#fff",
    public textColor = "red",
  ){}
}

export interface Link{
  label: string;
  path: string;
}

@Component({
  selector: 'my-navbar',
  imports: [Select ,RouterLink,RouterLinkActive, CommonModule, FormsModule, Container, LinkItem, HamburgerBtn, TranslatePipe],
  templateUrl: './navbar.html',
  styles: `
    .navbar {
    --bg-color: #121212;
    --logo-w: 10px;
    --text-color: #121212;
    --toolbar-height: 10px;
    position: relative;
    background: var(--bg-color);
    
}

.logo {
  width: var(--logo-w);
}

.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  text-decoration: underline;
}


.navbar-left{
    height: fit-content;
}

.mobile-menu{
    position: absolute;
    background: var(--bg-color);
    width: 100%;
    left: 0;
    top: 0;
    translate:0 -100%;
    transition: all 350ms ease-in-out;
    padding-bottom: 20px;
    z-index: 98;
    display: none;
}

.mobile-menu.open{
    translate: 0 0;
}

.mobile-toolbar{
    position: absolute;
    
    background: var(--bg-color);
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    z-index: 99;
    display: none;
}

.mobile-menu li {
    padding: 10px 20px;
}

@media screen and (width <= 720px) {
    .mobile-toolbar{
        display: flex;
    }
    
    .mobile-menu{
        display: block;

    }

    .desktop-menu{
      display: none;
    }
}
  `
})
export class Navbar implements AfterViewInit{
  
  @ViewChild('toolbar') 
  toolbar!: ElementRef;

  @ViewChild('mobileMenu') 
  mobileMenu!: ElementRef;

  // @ViewChild("menuBtn")
  // menuBtn!: ElementRef

  @Input()
  config: NavbarConfig = new NavbarConfig()

  @Input()
  links = [
    {label: 'NAVBAR.LINKS.LINK1_TITLE', path: ''},
    {label: 'NAVBAR.LINKS.LINK2_TITLE', path: '/about-us'},
    {label: 'NAVBAR.LINKS.LINK3_TITLE', path: '/services'},
    {label: 'NAVBAR.LINKS.LINK4_TITLE', path: '/hiring'},
    {label: 'NAVBAR.LINKS.LINK5_TITLE', path: '/contact'}
    // {label: "Mission", path: '/mission'}
  ]

   languages: SelectType[] = [
        { name: 'English', code: 'EN' },
        { name: 'French', code: 'FR' },
    ]
    
      // // filter: brightness(0.7);
    
      selectedLanguage: SelectType = {
        name: 'English',
        code: 'US'
      };
  

  @Output() onSearch = new EventEmitter<string>();

  searchValue = '';

  myStyle = {}

  constructor(private renderer: Renderer2, private translate: TranslateService){
    this.translate.use(localStorage.getItem("lang") || "en");
  }

  ngAfterViewInit() {
    const toolbarHeight = this.toolbar.nativeElement.offsetHeight;
    this.mobileMenu.nativeElement.style=`padding-top:${toolbarHeight}px`
    const resizeObserver = new ResizeObserver(() => {
      const newHeight = this.toolbar.nativeElement.offsetHeight;
      this.mobileMenu.nativeElement.style=`padding-top:${newHeight}px`
      // document.documentElement.style.setProperty('--toolbar-height', `${newHeight}px`);
    });

    resizeObserver.observe(this.toolbar.nativeElement);

    const currentLang = localStorage.getItem("lang") || "fr"
    if(currentLang === "fr"){
      this.selectedLanguage = {
        name: "French",
        code: "FR"
      }

    }else{
      this.selectedLanguage = {
        name: "English",
        code: "EN"
      }
    }


    
    this.myStyle = {
    '--bg-color': this.config.bgColor,
    '--logo-w': this.config.logoWidth,
    '--text-color': this.config.textColor,
    
    }
  }

  onClickMenuBtn(mobileMenu:any){
    mobileMenu.classList.toggle("open")
  }


  handleSearch() {
    this.onSearch.emit(this.searchValue);
  }

  onLangChange(event: any){
    localStorage.setItem("lang", event.value.code.toLocaleLowerCase())
    this.translate.use(event.value.code.toLocaleLowerCase())
  }


}
