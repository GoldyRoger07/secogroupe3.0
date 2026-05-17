import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Navbar } from "../../../components/v4/navbar/navbar";
import { interval } from 'rxjs';

@Component({
  selector: 'v4-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home implements OnInit, OnDestroy {
  
  i = 0

  interval = 0

  fade = signal(false)

  images = [
    "img/services/new/compressed/construction_worker_and_maintenance_1440.webp",
    "img/services/new/compressed/facility_management_1_1440.webp",
    "img/services/new/compressed/facility_management_1440.webp",
    "img/services/new/compressed/facility_manager_1440.webp",
    "img/services/compressed/concierge_1440.webp",

    "img/services/new/compressed/housekeeping_team_1440.webp",
    "img/services/new/compressed/janitorial_hospital_1440.webp",
    "img/services/new/compressed/janitorial_1440.webp",
    "img/services/compressed/security_guard_1440.webp",
    "img/services/compressed/staffing_solution_1440.webp"
  ]
  ngOnInit(): void {
    this.interval = setInterval((e:any)=>{

      this.fade.set(true)

      setTimeout(()=>{
        this.i = (this.i+1)%this.images.length
        document.querySelector('.hero-section')?.setAttribute('style', `--current-image: url('${this.images[this.i]}')`)
        this.fade.set(false)
      }, 500)
      console.log(e)
      // if(this.i === this.images.length - 1)
      //   this.i = 0
      // else
      //   this.i++
      
    },5000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
