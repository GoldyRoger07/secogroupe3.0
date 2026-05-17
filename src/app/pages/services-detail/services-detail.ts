import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../components/v4/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-detail',
  imports: [Navbar, Footer, Container],
  templateUrl: './services-detail.html',
  styleUrl: './services-detail.css'
})
export default class ServicesDetail implements OnInit{

  pays = ""
  service = ""
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.pays = params.get('pays') || ""
      this.service = params.get('service') || "";


    })
  }

}
