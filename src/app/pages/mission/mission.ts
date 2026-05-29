import { Component, inject, OnInit } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { Navbar } from "../../components/v4/navbar/navbar";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mission',
  imports: [Navbar, Footer, Container, Navbar],
  templateUrl: './mission.html',
  styleUrl: './mission.css'
})
export default class Mission implements OnInit{

  ourCoreValueCards = [
    {
      title: 'Excellence & Quality',
      description: `We pursue the highest standards in everything we do, from
                    the cleanliness of a floor to the professionalism of our staff. We believe quality
                    service is the foundation of lasting partnerships.`
    },
    {
      title: 'Integrity & Trust',
      description: `We operate with complete transparency, honesty, and ethical
conduct. Our clients trust us with their security and their infrastructure, and we honor
that trust above all.`
    },
    {
      title: 'Proactive Expertise',
      description: `We don't just react to problems; we anticipate them. Our teams
are cross-trained and equipped with the expertise to provide proactive maintenance,
leading-edge security, and smart staffing solutions.
4.​ Integrated Partnership: We treat our client relation`
    },
    {
      title: 'Integrated Partnership',
      description: `We treat our client relationships as true partnerships. By
offering a comprehensive suite of services, we integrate seamlessly into your
operations to provide maximum efficiency and value.`
    },
    {
      title: 'Safety & Well-being',
      description: `We prioritize the safety of your people, your assets, and our
own employees. We ensure all environments we manage are secure, healthy, and
compliant with all regulations.`
    },

  ]

  title = inject(Title)
  meta = inject(Meta)

  ngOnInit(): void {
    const sections = document.querySelectorAll(".section-animate")

    this.title.setTitle('About Seco Groupe | Hospitality, Staffing & Cleaning Experts');
    this.meta.updateTag({ name: 'description', content: 'Learn more about Seco Groupe, an international company providing hospitality support, staffing solutions, janitorial cleaning, concierge, and security services.' });
    this.meta.updateTag({ property: 'og:title', content: 'Seco groupe | About Us' });

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
  }
}
