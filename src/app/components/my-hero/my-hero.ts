import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'my-hero',
  imports: [],
  templateUrl: './my-hero.html',
  styleUrl: './my-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyHero {
  imgs = [
    "img/services/new/building_maintenance.jpg",
    "img/services/housekeeping.jpg",
    "img/services/concierge.jpg",
    "img/services/new/construction_worker_and_maintenance.jpg",
    "img/services/new/facility_management_1.jpg",
    "img/services/new/facility_management.jpg",
    "img/services/new/facility_manager.jpg",

    "img/services/new/housekeeping_team.jpg",
    "img/services/new/janitorial_cleaning.jpg",
    "img/services/new/janitorial_hospital.jpg",
    "img/services/new/janitorial_kitchen_cleaning.jpg",
    "img/services/new/janitorial.jpg",
    "img/services/new/seco_tech_maintenance_elevator.jpg",
    "img/services/new/seco_tech_picture_cable.jpg"
    
  ];
}
