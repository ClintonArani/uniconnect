import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//solid icons
import { faTimes, faArrowUp, faHome, faNetworkWired, faBook, faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons';
// Brand icons
import { faFacebook, faLinkedin, faTiktok, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTiktok = faTiktok;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faHeart = faHeart; 
}
