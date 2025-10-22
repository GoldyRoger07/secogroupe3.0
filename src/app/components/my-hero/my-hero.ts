import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { ProgressiveImage } from '../progressive-image/progressive-image';
// register Swiper custom elements
register();

@Component({
  selector: 'my-hero',
  imports: [ProgressiveImage],
  templateUrl: './my-hero.html',
  styleUrl: './my-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyHero {
  imgs = [
    "img/services/compressed/housekeeping.webp",
    "img/services/compressed/concierge.webp",
    "img/services/new/compressed/construction_worker_and_maintenance.webp",
    "img/services/new/compressed/facility_management_1.webp",
    "img/services/new/compressed/facility_management.webp",
    "img/services/new/compressed/facility_manager.webp",

    "img/services/new/compressed/housekeeping_team.webp",
    "img/services/new/compressed/janitorial_cleaning.webp",
    "img/services/new/compressed/janitorial_hospital.webp",
    "img/services/new/compressed/janitorial.webp",
    "img/services/new/compressed/seco_tech_maintenance_elevator.webp",
    "img/services/compressed/security_guard.webp",
    "img/services/compressed/staffing_solution.webp"
    
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
