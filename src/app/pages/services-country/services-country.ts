import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-services-country',
  imports: [Navbar, Footer, Container, CommonModule],
  templateUrl: './services-country.html',
  styleUrl: './services-country.css'
})
export default class ServicesCountry implements OnInit{
  ngOnInit(): void {
    const sections = document.querySelectorAll("section")

    
const observer = new IntersectionObserver((entries)=>{
    // console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("active"))
                entry.target.classList.add("active")
        }
    })
    
    },{
    threshold: 0.25
    })

    sections.forEach(section => {
        observer.observe(section)
    })
  }
  
}