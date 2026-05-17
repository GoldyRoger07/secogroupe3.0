import { Component } from '@angular/core';
import { Navbar } from "../../components/v4/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Select } from "primeng/select";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectType } from '../../models/SelectType';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, Select, ReactiveFormsModule],
  templateUrl: './contact.html',
  styles: ``
})
export default class Contact {
  languages: SelectType[] = [
      { name: 'English', code: 'US' },
      { name: 'French', code: 'FR' },
  ]
  
    // // filter: brightness(0.7);
  
    selectedLanguage: SelectType | null = null;
  
    formGroup = new FormGroup({
      selectedLanguage: new FormControl(this.selectedLanguage)
    })
}
