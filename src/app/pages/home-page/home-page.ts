import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home-page',
  imports: [ButtonModule, CardModule, Navbar, Footer, ReactiveFormsModule, MySlider, MyHero, Select],
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
export class HomePage {
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
}
