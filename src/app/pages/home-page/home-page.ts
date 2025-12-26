import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { MyButton } from "../../components/my-button/my-button";
import { HeroSection } from "../../components/hero-section/hero-section";
import { MySlider } from "../../components/my-slider/my-slider";
import { MyHero } from "../../components/my-hero/my-hero";
import { Select } from "primeng/select";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectType } from '../../models/SelectType';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { Container } from "../../components/container/container";
import { NativeSlider } from "../../components/native-slider/native-slider";
import { Dialog } from 'primeng/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface Product {
    id: string,
    code: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string,
    quantity: number,
    inventoryStatus: string,
    rating: number
}

interface CardService {
  name: string;
  description: string;
  cover: string;
}

@Component({
  selector: 'app-home-page',
  imports: [Dialog,Carousel, CommonModule, ButtonModule, CardModule, Navbar, Footer, ReactiveFormsModule, MySlider, MyHero, Select, Container, NativeSlider],
  templateUrl: './home-page.html',
  styles: `
  .hero-section{
    position: relative;
  }
  .hero-section::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: radial-gradient(circle farthest-corner at 0% 0%, #0545f5, transparent 75%);
    z-index:2;
  }

  .home-hero_path {
    object-fit: contain;
    object-position: 50% 100%;
    flex: none;
    align-self: flex-end;
    width: 100%;
    min-width: 32rem;
    max-width: none;
    display: block;
    position: absolute;
    inset: auto 0% 0% auto;
    z-index: 1;
}

.home-hero_connection-element {
    object-fit: contain;
    object-position: 100% 100%;
    flex: none;
    align-self: flex-end;
    max-width: none;
    height: 56.5vw;
    min-height: 18rem;
    max-height: 100%;
    display: block;
    position: absolute;
    inset: auto 0% 0% auto;
    z-index: 1;
}

.card-img{
  transition: all 0.3s ease-in-out;
  
}

.card-img:hover{
  scale: 1.1;
 
}

.img-container{
  overflow: hidden;
}
  `
})
export default class HomePage implements OnInit{


  // Pour le SEO
  title = inject(Title)
  meta = inject(Meta)
  router = inject(Router)


  visible = false

  clients = [
    { size: "w-34", url: "img/clients/brana_logo.png" },
    { size: "w-54", url: "img/clients/Grand-Sierra-Resort-Logo.png" },
    { size: "w-54", url: "img/clients/grand_geneva_logo.jpeg" },
    { size: "w-44", url: "img/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif" },
    { size: "w-34", url: "img/clients/logo_barbancourt.jpg" },
    { size: "w-34", url: "img/clients/logo_best_western.png" },
    { size: "w-34", url: "img/clients/logo_boomtown_resort.webp" },
    { size: "w-34", url: "img/clients/logo_camelback_resort.png" },
    { size: "w-34", url: "img/clients/logo_chulavista.png" },
    { size: "w-34", url: "img/clients/logo_dells_resort.png" },
    { size: "w-54", url: "img/clients/logo_fne.webp" },
    { size: "w-34", url: "img/clients/logo_ihsi.png" },
    { size: "w-34", url: "img/clients/logo_marriott.png" },
    { size: "w-44", url: "img/clients/logo_monarch_resort.png"}
    
  ]

  maps = [
    {
      imgUrl: 'img/maps/compressed/usa_map_512.webp',
      title: 'United States'
    },
    {
      imgUrl: 'img/maps/compressed/canada_map_512.webp',
      title: 'Canada'
    },
    {
      imgUrl: 'img/maps/compressed/haiti_map_512.webp',
      title: 'Haiti'
    },
    {
      imgUrl: 'img/maps/compressed/bahamas_map_512.webp',
      title: 'Bahamas'
    },
    {
      imgUrl: 'img/maps/compressed/bresil_map_512.webp',
      title: 'Bresil'
    },
  ]

  cardServices: CardService[] = [
    {
      name: 'Building Maintenance',
      description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently...',
      cover: 'img/services/new/compressed/building_maintenance_500.webp'
    },
    {
      name: 'Security',
      description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence...',
      cover: 'img/services/compressed/security_guard_500.webp'
    },
    {
      name: 'Housekeeping',
      description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients...',
      cover: 'img/services/compressed/housekeeping1_500.webp'
    },
    {
      name: 'Janitorial',
      description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management...',
      cover: 'img/services/new/compressed/janitorial_hospital_500.webp'
    },
    {
      name: 'Staffing',
      description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization...',
      cover: 'img/services/compressed/staffing_solution_500.webp'
    },
    {
      name: 'Concierges',
      description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support...',
      cover: 'img/services/compressed/concierge_500.webp'
    }
  ]

  responsiveOptions: any[] | undefined;

  services: SelectType[] = [
    { name: 'Security', code: 'SS' },
    { name: 'Housekeeping', code: 'HK' },
    { name: 'Facility Management', code: 'FM' },
    { name: 'Staffing Solutions', code: 'ST' },
    { name: 'Consulting Services', code: 'CS' }
  ]



  // // filter: brightness(0.7);

  selectedService: SelectType | null = null;

  formGroup = new FormGroup({
    selectedService: new FormControl(this.selectedService)
  })

  ngOnInit(): void {
     this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    this.title.setTitle('Home — Secogroupe');
    this.meta.updateTag({ name: 'description', content: 'Seco Groupe est Gardiennage, rondes, interventions, sécurité privée, surveillance de locaux... #securite' });
    this.meta.updateTag({ property: 'og:title', content: 'seco groupe | securite' });


    const sections = document.querySelectorAll("section")

    
const observer = new IntersectionObserver((entries)=>{
    // console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("active"))
                entry.target.classList.add("active")
        }
    })
    
    },{
    threshold: 0.25
    })

    sections.forEach(section => {
        observer.observe(section)
    })
  
  }

  showDialog(country: string) {
        // if(country === "Haiti")
          this.router.navigateByUrl("/services-country/"+country.toLocaleLowerCase())
        // else
        //   this.router.navigateByUrl("/services")
  }
}
