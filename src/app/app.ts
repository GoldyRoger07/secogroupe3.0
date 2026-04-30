import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Secogroupe';

  // private translate = inject(TranslateService);
  
  constructor(private translate: TranslateService) {
      this.translate.addLangs(['fr', 'en']);
      this.translate.setFallbackLang('fr');
      this.translate.use('en');
  }


}
