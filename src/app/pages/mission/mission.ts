import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";

@Component({
  selector: 'app-mission',
  imports: [Navbar, Footer, Container],
  templateUrl: './mission.html',
  styleUrl: './mission.css'
})
export default class Mission {

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
}
