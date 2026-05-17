import { Component } from '@angular/core';
import { Navbar } from "../../../components/v4/navbar/navbar";
import { HeroSlider } from "../../../components/v4/hero-slider/hero-slider";

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroSlider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home {

}
