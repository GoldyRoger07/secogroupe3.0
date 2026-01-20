import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { CommonModule } from '@angular/common';
import { Filiale } from '../../models/Filiale';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilialeService } from '../../services/filiale-service';




@Component({
  selector: 'app-services-country',
  imports: [RouterLink,Navbar, Footer, Container, CommonModule],
  templateUrl: './services-country.html',
  styleUrl: './services-country.css'
})
export default class ServicesCountry implements OnInit{
  
  pays: string = '';
  
  filiales: Filiale[] = []

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  filialeService = inject(FilialeService)
  
  ngOnInit(): void {
    const sections = document.querySelectorAll(".section-animate")

    
    const observer = new IntersectionObserver((entries)=>{
    // console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("active"))
                entry.target.classList.add("active")
        }
    })
    
    },{
    threshold: 0.75
    })

    sections.forEach(section => {
        observer.observe(section)
    })

    this.activatedRoute.paramMap.subscribe(params => {
      this.pays = params.get('pays') || "";
      

      if(!(this.pays === "usa" || this.pays === "canada" || this.pays === "haiti" || this.pays === "bahamas" || this.pays === "bresil"))
          this.router.navigate(['/']);
      else
          this.filiales = this.filialeService.getFilialesByPays(this.pays)
      
    });
  }


  getImgUrls(){
    let tab = []

    for(let i=0; i<14; i++){
      let imgUrl
      if(i===0)
          imgUrl = "images/services/housekeeping.jpg"
      else
          imgUrl = "images/services/housekeeping"+i+".jpg"

      tab.push(imgUrl)
    }

    return tab
  }
  
}