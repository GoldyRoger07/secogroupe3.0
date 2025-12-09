import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { ProgressiveImage } from '../progressive-image/progressive-image';
import { Container } from '../container/container';
import { RouterLink } from '@angular/router';
// register Swiper custom elements
register();

@Component({
  selector: 'my-hero',
  imports: [Container, RouterLink],
  templateUrl: './my-hero.html',
  styleUrl: './my-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyHero {
  imgs = [
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
    
  ];

  imgsSmall = [
    "img/services/small/housekeeping_small.jpg",
    "img/services/small/concierge_small.jpg",
    "img/services/new/small/construction_worker_and_maintenance_small.jpg",
    "img/services/new/small/facility_management_1_small.jpg",
    "img/services/new/small/facility_management_small.jpg",
    "img/services/new/small/facility_manager_small.jpg",

    "img/services/new/small/housekeeping_team_small.jpg",
    "img/services/new/small/janitorial_cleaning_small.jpg",
    "img/services/new/small/janitorial_hospital_small.jpg",
    "img/services/new/small/janitorial_small.jpg",
    "img/services/new/small/seco_tech_maintenance_elevator_small.jpg",
    "img/services/small/security_guard_small.jpg",
    "img/services/small/staffing_solution_small.jpg"
    
  ];
}
