import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ChatbotService } from '../../services/chatbot.service'; // Import the ChatbotService
import { FormsModule } from '@angular/forms';
import { ChatEntry } from '../../interfaces/chat-entry.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faPaperPlane, faGraduationCap, faNetworkWired, faHome, faBook, faArrowRight, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'] // Corrected to styleUrls
})
export class LandingPageComponent {
  faPaperPlain = faPaperPlane;
  faPlay = faPlay;
  faGraduationCap = faGraduationCap;
  faNetworkWired = faNetworkWired;
  faHome = faHome;
  faBook = faBook;
  faStar = faStar;
  faFacebook  = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faArrowRight = faArrowRight
  faQuoteLeft = faQuoteLeft;
  isChatbotOpen = false;
  chatHistory: ChatEntry[] = []; // To store chat history
  userMessage: string = ''; // For binding input text

  icons = {
    faGraduationCap,
    faNetworkWired,
    faHome,
    faBook,
  };
  cards = [
    { icon: this.icons.faGraduationCap, title: 'Skilled Instructors', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut nam maiores dolor cupiditate tempore dicta obcaecati delectus necessitatibus veritatis.' },
    { icon: this.icons.faNetworkWired, title: 'Online Classes', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut nam maiores dolor cupiditate tempore dicta obcaecati delectus necessitatibus veritatis.' },
    { icon: this.icons.faHome, title: 'Home Projects', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut nam maiores dolor cupiditate tempore dicta obcaecati delectus necessitatibus veritatis.' },
    { icon: this.icons.faBook, title: 'Book Library', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut nam maiores dolor cupiditate tempore dicta obcaecati delectus necessitatibus veritatis.' },
  ];
  constructor(private chatbotService: ChatbotService) {}

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
    if (this.isChatbotOpen) {
      this.chatHistory = this.chatbotService.getChatHistory();
    }
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      const response = this.chatbotService.getResponse(this.userMessage);
      this.chatHistory = this.chatbotService.getChatHistory(); // Update chat history
      this.userMessage = ''; // Clear input after sending
    }
  }
}