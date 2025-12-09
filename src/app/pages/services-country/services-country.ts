import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { CommonModule } from '@angular/common';

interface Country { code: string; name: string; flag: string; }
interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  category?: string;
  tags: string[];
  details: string[];
  localNotes?: string;
}


@Component({
  selector: 'app-services-country',
  imports: [Navbar, Footer, Container, CommonModule],
  templateUrl: './services-country.html',
  styleUrl: './services-country.css'
})
export default class ServicesCountry {
countries: Country[] = [
    { code: 'usa', name: 'U.S.A', flag: '🇺🇸' },
    { code: 'haiti', name: 'Haïti', flag: '🇭🇹' },
    { code: 'canada', name: 'Canada', flag: '🇨🇦' },
    { code: 'brazil', name: 'Brésil', flag: '🇧🇷' },
    { code: 'bahamas', name: 'Bahamas', flag: '🇧🇸' },
  ];

  // default selected country
  selected: string = 'usa';

  // active service for modal
  activeService: Service | null = null;

  // sample services per country (replace with real data)
 servicesByCountry: Record<string, Service[]> = {
    usa: this.baseServices('U.S.A', {
      housekeepingNote: 'Plans flexibles, conformité OSHA pour le personnel sur site.',
      securityNote: 'Options de sécurité mobile et caméra cloud disponibles.',
    }),
    haiti: this.baseServices('Haïti', {
      housekeepingNote: 'Formules optimisées pour zones à connectivité limitée.',
      securityNote: 'Sécurisation des sites en tenant compte des contraintes locales.',
    }),
    canada: this.baseServices('Canada', {
      housekeepingNote: 'Conformité aux normes locales et bilinguisme FR/EN possible.',
      securityNote: 'Services conformes aux standards de sécurité locaux.',
    }),
    brazil: this.baseServices('Brésil', {
      housekeepingNote: 'Adaptation aux grands ensembles résidentiels et saison touristique.',
      securityNote: 'Solutions de gardiennage et surveillance pour zones touristiques.',
    }),
    bahamas: this.baseServices('Bahamas', {
      housekeepingNote: 'Services adaptés au secteur hôtelier et aux locations saisonnières.',
      securityNote: 'Surveillance 24/7 et gestion d’accès pour propriétés en bord de mer.',
    }),
  };

  // Génère les 5 services avec descriptions cohérentes ; on peut réutiliser et personnaliser
  private baseServices(countryName: string, notes: { housekeepingNote?: string; securityNote?: string; } ) {
    const base: Service[] = [
      {
        id: `${countryName}-housekeeping`,
        title: 'Housekeeping',
        short: 'Nettoyage professionnel et entretien quotidien.',
        description: `Service de housekeeping complet (ménage, entretien léger, gestion du linge) adapté aux besoins locaux.`,
        category: 'Opérationnel',
        tags: ['Ménage', 'Entretien', 'Rapide'],
        details: [
          'Interventions régulières ou ponctuelles',
          'Personnel qualifié et contrôles qualité',
          'Gestion du linge et réassort de fournitures',
        ],
        localNotes: notes.housekeepingNote,
      },
      {
        id: `${countryName}-maintenance`,
        title: 'Building Maintenance',
        short: 'Maintenance technique du bâtiment et réparations.',
        description: `Maintenance préventive et corrective des installations : électricité, plomberie, climatisation, structure.`,
        category: 'Technique',
        tags: ['Plomberie', 'Électricité', 'Climatisation'],
        details: [
          'Contrats de maintenance périodique',
          'Interventions 24/7 pour urgences',
          'Rapports d’intervention et suivi',
        ],
      },
      {
        id: `${countryName}-staffing`,
        title: 'Staffing Solutions',
        short: 'Fourniture de personnel qualifié (temporaire ou permanent).',
        description: `Recrutement et mise à disposition de personnel : réception, ménage, maintenance, sécurité. Matching selon profil et conformité locale.`,
        category: 'Ressources humaines',
        tags: ['Recrutement', 'Temporaire', 'Formation'],
        details: [
          'Sélection et vérification des antécédents',
          'Formations d’accueil et sécurité',
          'Gestion administrative et paie (optionnelle)',
        ],
      },
      {
        id: `${countryName}-concierge`,
        title: 'Concierge Services',
        short: 'Conciergerie pour clients, résidents et visiteurs.',
        description: `Services de conciergerie : check-in/out, réservations, gestion événements et demandes spéciales pour améliorer l’expérience client.`,
        category: 'Hospitalité',
        tags: ['Check-in', 'Réservations', 'Support client'],
        details: [
          'Accueil et assistance 24/7',
          'Organisation d’événements et transferts',
          'Plateforme de demandes et suivi',
        ],
      },
      {
        id: `${countryName}-security`,
        title: 'Security',
        short: 'Sécurité physique et surveillance adaptée.',
        description: `Solutions de sécurité : agents formés, patrouilles, contrôle d’accès et surveillance vidéo en option.`,
        category: 'Sécurité',
        tags: ['Agents', 'Surveillance', 'Patrouille'],
        details: [
          'Agents formés et uniformés',
          'Contrôle d’accès et rondes régulières',
          'Options de vidéosurveillance et alarmes',
        ],
        localNotes: notes.securityNote,
      },
    ];

    return base;
  }

  selectCountry(code: string) {
    this.selected = code;
    this.activeService = null;
  }

  openProject(svc: Service, event?: Event) {
    event?.preventDefault();
    this.activeService = svc;
  }

  closeModal() {
    this.activeService = null;
  }

  contactForService(svc: Service | null) {
    if (!svc) return;
    // Remplace cet alert par ton modal/formulaire réel ou routing
    alert(`Demande de devis pour: ${svc.title} — Pays: ${this.getCountryName(this.selected)}`);
  }

  private getCountryName(code: string) {
    return this.countries.find(c => c.code === code)?.name ?? code;
  }
}
