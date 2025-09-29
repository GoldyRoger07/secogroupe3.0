import { Component } from '@angular/core';

@Component({
  selector: 'language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styles: ``
})
export class LanguageSelector {
open = false;
clickSelect = false

  languages = [
    { code: 'en', label: 'US', flag: 'https://flagcdn.com/us.svg' },
    { code: 'fr', label: 'FR', flag: 'https://flagcdn.com/fr.svg' }
  ];

  selected = this.languages[0];

  toggleDropdown() {
    if(!this.clickSelect)
      this.open = !this.open;

    this.clickSelect = false
    console.log("toggleDropdown is clicked")
  }

  selectLanguage(lang: any) {
    this.selected = lang;
    this.clickSelect = true
    this.open = false;
    console.log("Langue sélectionnée:", lang.code);
    // Ici tu peux ajouter la logique pour changer la langue du site
  }
}
