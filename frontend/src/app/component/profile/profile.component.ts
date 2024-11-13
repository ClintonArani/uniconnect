import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faChartSimple, faComment, faEye, faHeart, faPencilAlt, faPlus, faSearch, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  faEye = faEye;
  faUsers = faUsers;
  faPencilAlt = faPencilAlt;
  faArrowRight = faArrowRight;
  faHeart = faHeart;
  faComment = faComment;
  faPlus = faPlus;
  faUserPlus = faUserPlus;
  icons = {
    faUsers,
    faChartSimple,
    faSearch
  }
  // analytics
  analytics = [
    {icon:this.icons.faUsers, para1: '51 profile views',para2: 'discover who viewed your profile.'},
    {icon:this.icons.faChartSimple, para1: '162 post impressions',para2: "check out who's engaging with your posts."},
    {icon:this.icons.faSearch, para1: '400 search appearances',para2: "see how often you appear in search results."},
  ]
  // posts
  posts = [
    {author: 'bill clinton', image: '../assets/grocery.png', text: "<b>As a software developer</b>, I’m excited to share my latest project with you – a grocery eCommerce website that I’ve built to simplify your shopping experience! Whether you’re looking for fresh produce, pantry essentials, or specialty items, it’s all just a few clicks away.", like: '200k',comments: '170k'},
    {author: 'bill clinton', image: '../assets/clinton.jpg', text: "I’m proud to share that I’ve recently graduated from <strong>Teach2Give</strong> as a Certified <strong>Full-Stack Developer!</strong>strong 🎉 This journey has been an incredible learning experience, where I’ve gained hands-on skills in both front-end and back-end development. I’m excited to take the next steps in my career and apply these skills to new projects and opportunities.If you’re interested in collaborating or discussing development opportunities, feel free to reach out!<br><br> <b> #FullStackDeveloper #Teach2Give #SoftwareDevelopment #Coding #DeveloperLife #TechCommunity #CareerMilestone</b>", like: '500k',comments: '450k'},
    {author: 'bill clinton', image: '../assets/hackerton.jpg', text: "<strong>🏆 Hackathon Victory!</strong><br> 🎉I’m excited to share that I recently participated in a hackathon and earned 1st place! 🥇 It was an incredible experience where I had the opportunity to push my skills, collaborate with talented teams, and solve real-world challenges in a fast-paced environment. The experience was not only rewarding but also a great way to learn and grow as a developer.Looking forward to more opportunities to challenge myself and continue learning. Let’s connect if you’re interested in discussing tech, innovation, or future collaborations!<br><br> <b> #HackathonWinner #FullStackDeveloper #TechInnovation #Coding #SoftwareDevelopment #Hackathon #DeveloperLife </b>", like: '2m',comments: '1m'},
    {author: 'bill clinton', image: '../assets/united kingdom.jpg', text: "<strong>🌍 Exciting Career Announcement! 🚀</strong> <br>I’m thrilled to share that next month, I’ll be moving to the United Kingdom to start a new chapter in my career as a Software Engineer! I’ve received an amazing offer with a £197K GBP annual salary, and I couldn’t be more excited to join a dynamic team and take on new challenges in the tech industry.It’s been an incredible journey getting to this point, and I’m looking forward to contributing, growing, and learning in this new role.Thank you to everyone who has supported me along the way, and if you're in the UK, I’d love to connect!<br><br> <b>#NewJob #SoftwareEngineering #CareerGrowth #TechIndustry #UK #DeveloperLife #ExcitingTimes </b", like: '20m',comments: '10m'},
  ]
  // connection
  connections = [
    {image: '../assets/person1.png',name: 'sakina kiteto',profession: 'data analyst'},
    {image: '../assets/moh.jpg',name: 'Moh',profession: 'software developer'},
    {image: '../assets/person2.png',name: 'john doe',profession: 'front-end developer'},
    {image: '../assets/person3.png',name: 'bill gates',profession: 'full-stack developer'},
    {image: '../assets/person4.png',name: 'side kama side',profession: 'backend developer'},
  ]
  //follow pages
  follows = [
    {companyPic: '../assets/company1.png',title: 'rosa corps limited', profession: 'software developer', followers: '12,000,000 followers', pic1: '../assets/person1.png',pic2: '../assets/person5.png',pic3: '../assets/person3.png',connection: '1000 connections'},
    {companyPic: '../assets/company2.png',title: 'foster corps limited', profession: 'data analyst', followers: '8,000,000 followers', pic1: '../assets/person2.png',pic2: '../assets/person6.png',pic3: '../assets/person6.png',connection: '9000 connections'},
    {companyPic: '../assets/company3.png',title: 'sweety family limited', profession: 'front-end developer', followers: '6,000,000 followers', pic1: '../assets/person3.png',pic2: '../assets/person1.png',pic3: '../assets/person5.png',connection: '4000 connections'},
    {companyPic: '../assets/company4.png',title: 'vacancies in kenya', profession: 'backend-developer developer', followers: '4,000,000 followers', pic1: '../assets/person4.png',pic2: '../assets/person2.png',pic3: '../assets/person2.png',connection: '3000 connections'}
  ]
}
