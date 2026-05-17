import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeroSlider } from "./components/v4/hero-slider/hero-slider";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSlider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Secogroupe';

  // private translate = inject(TranslateService);
  
  constructor(private translate: TranslateService) {
      this.translate.addLangs(['fr', 'en']);
      this.translate.setFallbackLang('en');
      this.translate.use('en');
  }


}
