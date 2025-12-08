import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";

@Component({
  selector: 'app-services-country',
  imports: [Navbar, Footer, Container],
  templateUrl: './services-country.html',
  styleUrl: './services-country.css'
})
export default class ServicesCountry {

}
