import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Container } from "../../components/container/container";

@Component({
  selector: 'app-about-us',
  imports: [Footer, Navbar, Container],
  templateUrl: './about-us.html',
  styles: ``
})
export default class AboutUs {

}
