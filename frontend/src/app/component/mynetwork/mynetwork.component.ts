import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faCalendar, faClipboardList, faFileAlt, faUser, faUserFriends, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mynetwork',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './mynetwork.component.html',
  styleUrl: './mynetwork.component.css'
})
export class MynetworkComponent {
    faUsers = faUsers;
    faBuilding = faBuilding;
    faUser = faUser;
    faUserFriends = faUserFriends;
    faClipboardList = faClipboardList;
    faFileAlt = faFileAlt;
    faCalendar = faCalendar;
    faUserPlus = faUserPlus;

    connects = [
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
      {coverImage: '../assets/person1.png',profileImage: '../assets/person2.png',name: 'bill clinton',profession: 'software engineer',followPic: '../assets/person3.png',mutualConnect: "kennedy and 88 other mutual connection"},
    ]
}
