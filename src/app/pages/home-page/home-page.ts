import { Component, OnInit } from '@angular/core';
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
  imports: [Carousel, CommonModule, ButtonModule, CardModule, Navbar, Footer, ReactiveFormsModule, MySlider, MyHero, Select, Tag],
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

  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ]

  maps = [
    {
      imgUrl: 'img/maps/compressed/usa_map.webp',
      title: 'United States'
    },
    {
      imgUrl: 'img/maps/compressed/canada_map.webp',
      title: 'Canada'
    },
    {
      imgUrl: 'img/maps/compressed/haiti_map.webp',
      title: 'Haiti'
    },
    {
      imgUrl: 'img/maps/compressed/bahamas_map.webp',
      title: 'Bahamas'
    },
    {
      imgUrl: 'img/maps/compressed/bresil_map.webp',
      title: 'Bresil'
    },
  ]

  cardServices: CardService[] = [
    {
      name: 'Building Maintenance',
      description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently...',
      cover: 'img/services/new/compressed/building_maintenance.webp'
    },
    {
      name: 'Security',
      description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence...',
      cover: 'img/services/compressed/security_guard.webp'
    },
    {
      name: 'Housekeeping',
      description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients...',
      cover: 'img/services/compressed/housekeeping1.webp'
    },
    {
      name: 'Janitorial',
      description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management...',
      cover: 'img/services/new/compressed/janitorial_hospital.webp'
    },
    {
      name: 'Staffing',
      description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization...',
      cover: 'img/services/compressed/staffing_solution.webp'
    },
    {
      name: 'Concierges',
      description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support...',
      cover: 'img/services/compressed/concierge.webp'
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
                numVisible: 2,
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
  }
}
