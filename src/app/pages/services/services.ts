import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { HeroSection } from "../../components/hero-section/hero-section";

interface ServiceSection{
  title: string;
  icon?: string;
  description: string;
  imageUrl: string;
  subServices: SubService[];

}

interface SubService{
  title: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-services',
  imports: [Navbar, Footer, HeroSection],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  serviceSections: ServiceSection[] = [
  {
    title: 'Housekeeping & Janitorial',
    icon: 'ri-brush-line',
    description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients',
    imageUrl: 'img/services/housekeeping.jpeg',
    subServices: [
      {
        title: 'Pristine Environments',
        icon: 'ri-sparkling-line',
        description: 'Daily, weekly, or custom cleaning schedules tailored to your facility\'s needs—from offices and commercial spaces to industrial sites.'
      },
      {
        title: 'Health & Safety Focus',
        icon: 'ri-shield-cross-line',
        description: 'Use of industry-leading practices and eco-friendly products to promote a sterile environment and reduce the spread of germs.'
      },
      {
        title: 'Specialized Care',
        icon: 'ri-tools-line',
        description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management.'
      }
    ]
  },
  {
    title: 'Building Maintenance',
    icon: 'ri-building-2-line',
    description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently.',
    imageUrl: 'img/services/building_maintenance.jpeg',
    subServices: [
      {
        title: 'Preventative Maintenance',
        icon: 'ri-settings-3-line',
        description: 'Regular inspections and maintenance of essential building systems to minimize unexpected breakdowns and costly repairs.'
      },
      {
        title: 'General Repairs',
        icon: 'ri-hammer-line',
        description: 'Handyman services including minor plumbing, electrical, carpentry, drywall, and painting.'
      },
      {
        title: 'HVAC & Equipment Oversight',
        icon: 'ri-temp-hot-line',
        description: 'Coordination and basic maintenance checks for heating, ventilation, air conditioning, and other facility equipment.'
      },
      {
        title: 'Groundskeeping (Optional highlight)',
        icon: 'ri-leaf-line',
        description: 'Keeping the exterior professional and well-maintained.'
      }
    ]
  },
  {
    title: 'Staffing Solutions',
    icon: 'ri-group-line',
    description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization.',
    imageUrl: 'img/services/staffing.jpeg',
    subServices: [
      {
        title: 'Flexible Staffing',
        icon: 'ri-exchange-line',
        description: 'Temporary, temp-to-hire, and direct placement services to meet fluctuating demands.'
      },
      {
        title: 'Vetted Professionals',
        icon: 'ri-user-follow-line',
        description: 'We handle all recruitment, screening, background checks, and initial training to ensure high-quality candidates.'
      },
      {
        title: 'Focus Areas',
        icon: 'ri-focus-2-line',
        description: `Provision of staff for all our core service areas (janitorial, maintenance,
          security, and concierge roles).`
      }
    ]
  },
  {
    title: 'Concierge Services',
    icon: 'ri-service-line',
    description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support.',
    imageUrl: 'https://bancm.com/wp-content/uploads/2024/04/shutterstock_2367142379.jpg',
    subServices: [
      {
        title: 'First Impressions',
        icon: 'ri-emotion-happy-line',
        description: 'Highly trained, polished, and friendly personnel serving as the welcoming face of your building.'
      },
      {
        title: 'Operational Support',
        icon: 'ri-briefcase-line',
        description: 'Managing front desk operations, package handling, visitor registration, access control, and amenity bookings.'
      },
      {
        title: 'Customized Service',
        icon: 'ri-customer-service-2-line',
        description: 'Acting as a central hub for information and assistance, tailored to the specific needs of residential, corporate, or luxury properties.'
      }
    ]
  },
  {
    title: 'Security Experts',
    icon: 'ri-shield-keyhole-line',
    description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence.',
    imageUrl: 'img/services/bg_seco_securite.jpg',
    subServices: [
      {
        title: '24/7 Protection',
        icon: 'ri-time-line',
        description: 'Trained and licensed security guards for static guarding, mobile patrols, and access control.'
      },
      {
        title: 'Risk Assessment',
        icon: 'ri-search-eye-line',
        description: 'Comprehensive security audits to identify vulnerabilities and implement strategic protection plans.'
      },
      {
        title: 'Integrated Solutions',
        icon: 'ri-camera-line',
        description: 'Deployment of advanced security technology, including surveillance (CCTV), alarm monitoring, and state-of-the-art access systems.'
      },
      {
        title: 'Emergency Response',
        icon: 'ri-alarm-warning-line',
        description: 'Professional handling of security incidents, emergency situations, and immediate response coordination.'
      }
    ]
  }
]

  
  
  
  other = [
    {
      title: 'Housekeeping & Janitorial',
      description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients',
      imageUrl: 'img/services/housekeeping.jpeg',
      subServices: [
        {
          title: 'Pristine Environments',
          description: 'Daily, weekly, or custom cleaning schedules tailored to your facility\'s needs—from offices and commercial spaces to industrial sites.',
          
        },
        {
          title: 'Health & Safety Focus',
          description: 'Use of industry-leading practices and eco-friendly products to promote a sterile environment and reduce the spread of germs.'
        },
        {
          title: 'Specialized Care',
          description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management.'
        }

      ]
    },
    {
      title: 'Building Maintenance',
      description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently.',
      imageUrl: 'img/services/housekeeping.jpeg',
      subServices: [
        {
          title: 'Preventative Maintenance',
          description: 'Regular inspections and maintenance of essential building systems to minimize unexpected breakdowns and costly repairs.'
        },
        {
          title: 'General Repairs',
          description: 'Handyman services including minor plumbing, electrical, carpentry, drywall, and painting.'
        },
        {
          title: 'HVAC & Equipment Oversight',
          description: 'Coordination and basic maintenance checks for heating, ventilation, air conditioning, and other facility equipment.'
        },
        {
          title: 'Groundskeeping (Optional highlight)',
          description: 'Keeping the exterior professional and well-maintained.'
        }

      ]
    },
    {
      title: 'Staffing Solutions',
      description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization.',
      imageUrl: 'img/services/housekeeping.jpeg',
      subServices: [
        {
          title: 'Flexible Staffing',
          description: 'Temporary, temp-to-hire, and direct placement services to meet fluctuating demands.'
        },
        {
          title: 'Vetted Professionals',
          description: 'We handle all recruitment, screening, background checks, and initial training to ensure high-quality candidates.'
        },
        {
          title: 'Focus Areas',
          description: `Provision of staff for all our core service areas (janitorial, maintenance,
            security, and concierge roles).`
      }

      ]
    },
    {
      title: 'Concierge Services',
      description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support.',
      imageUrl: 'img/services/housekeeping.jpeg',
      subServices: [
        {
          title: 'First Impressions',
          description: 'Highly trained, polished, and friendly personnel serving as the welcoming face of your building.'
        },
        {
          title: 'Operational Support',
          description: 'Managing front desk operations, package handling, visitor registration, access control, and amenity bookings.'
        },
        {
          title: 'Customized Service',
          description: 'Acting as a central hub for information and assistance, tailored to the specific needs of residential, corporate, or luxury properties.'
        }

      ]
    },
    {
      title: 'Security Experts',
      description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence.',
      imageUrl: 'img/services/housekeeping.jpeg',
      subServices: [
        {
          title: '24/7 Protection',
          description: 'Trained and licensed security guards for static guarding, mobile patrols, and access control.'
        },
        {
          title: 'Risk Assessment',
          description: 'Comprehensive security audits to identify vulnerabilities and implement strategic protection plans.'
        },
        {
          title: 'Integrated Solutions',
          description: 'Deployment of advanced security technology, including surveillance (CCTV), alarm monitoring, and state-of-the-art access systems.'
        },
        {
          title: 'Emergency Response',
          description: 'Professional handling of security incidents, emergency situations, and immediate response coordination.'
        }

      ]
    }
  ]
    
}
