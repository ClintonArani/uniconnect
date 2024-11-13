import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp, faComment, faRetweet, faPaperPlane, faUserFriends, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  // FontAwesomeModule,CommonModule
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faRetweet = faRetweet;
  faPaperPlane = faPaperPlane;
  faUserFriends = faUserFriends;
  faPlus = faPlus;
  faCalendar = faCalendar;

  posts = [
    {content: 'Software engineering is the backbone of modern technology, responsible for designing, developing, and maintaining applications that power the digital world. As software engineers, we utilize a mix of programming languages, frameworks, and tools to create solutions that are both scalable and efficient. We thrive on solving complex problems and transforming ideas into real-world applications that enhance productivity, communication, and user experience. Staying adaptable and continuously learning new skills is crucial in a field that’s ever-evolving. From frontend interfaces to backend databases, software engineering is a profession of precision, creativity, and continuous innovation.',image: '../assets/company1.png',profile_pic: '../assets/person1.png',author:'Maya Chen',profession:'software engineer',like:'278k',comment:'12k'},
    {content: "In today's data-driven world, data analysts play a critical role in helping organizations make informed decisions. They gather, process, and analyze vast amounts of data, turning it into actionable insights that drive strategies and improve performance. By leveraging tools like SQL, Python, and visualization software, data analysts are able to uncover trends and correlations that might otherwise go unnoticed. Beyond number-crunching, they provide valuable context to complex data, helping stakeholders understand the story behind the figures. A skilled data analyst bridges the gap between raw data and impactful business outcomes.",image: '../assets/company2.png',profile_pic: '../assets/person2.png',author:'Liam Parker',profession:'Data Analyst',like:'478k',comment:'112k'},
    {content: 'With cyber threats becoming more sophisticated, cybersecurity has become an essential part of organizational strategy. Cybersecurity specialists work tirelessly to protect systems, networks, and data from malicious attacks. By implementing security protocols, conducting risk assessments, and staying up-to-date with the latest threat intelligence, they build a strong defense against potential breaches. The role requires a sharp analytical mind, attention to detail, and a proactive approach to risk mitigation. In a world where data privacy is paramount, cybersecurity professionals are the unsung heroes safeguarding our digital trust.',image: '../assets/company3.png',profile_pic: '../assets/person3.png',author:'Jordan Blake',profession:'Cybersecurity Specialist ',like:'568k',comment:'72k'},
    {content: 'Database administrators are the guardians of organizational data, ensuring data is securely stored, efficiently managed, and readily accessible. They are responsible for designing, maintaining, and optimizing database systems that support business applications and analytics. Working with technologies like SQL, NoSQL, and cloud databases, they ensure data integrity, security, and high availability. The role of a database administrator requires both technical expertise and problem-solving skills, as they often manage complex data environments and troubleshoot issues. In an era where data is a vital asset, their work supports the backbone of informed business decisions.',image: '../assets/company4.png',profile_pic: '../assets/person4.png',author:'Priya Desai',profession:'Database Administrator',like:'778k',comment:'92k'}
  ]
  jobs = [
    {image: '../assets/company4.png',title:'Data Science Analyst',description:'For professionals skilled in data analysis, machine learning, and statistical modeling'},
    {image: '../assets/company3.png',title:'Full-Stack Software Developer',description:'A versatile role requiring expertise in both frontend and backend development'},
    {image: '../assets/company2.png',title:'Cybersecurity Operations Specialist',description:'Focused on monitoring, protecting, and securing an organization’s digital assets against cyber threats.'},
    {image: '../assets/company1.png',title:'Database Solutions Architect ',description:'Responsible for designing, implementing, and managing database systems to optimize storage, retrieval, and security of enterprise data.'},
  ]
}
