import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './messaging.component.html',
  styleUrl: './messaging.component.css'
})
export class MessagingComponent {
  faellipsisH = faEllipsisH;
  faSearch = faSearch;
  faEdit = faEdit;

  friends = [
    { name: 'Elizabeth Wairimu', time: '11:42 pm', lastMessage: 'Welcome Wairimu', image: '../assets/person1.png' },
    { name: 'John Doe', time: '10:15 am', lastMessage: 'How are you?', image: '../assets/person2.png' },
    { name: 'Jane Smith', time: '08:30 am', lastMessage: 'See you later!', image: '../assets/person3.png' },
    { name: 'Mike Johnson', time: '09:45 am', lastMessage: 'Let’s meet tomorrow.', image: '../assets/person4.png' },
    { name: 'Emily Davis', time: '07:00 am', lastMessage: 'Got it, thanks!', image: '../assets/person3.png' },
    { name: 'Chris Brown', time: '11:22 am', lastMessage: 'Sure thing.', image: '../assets/person4.png' },
    { name: 'Jessica White', time: '04:15 pm', lastMessage: 'I’ll call you.', image: '../assets/person2.png' },
    { name: 'George Miller', time: '02:50 pm', lastMessage: 'On my way.', image: '../assets/person1.png' },
    { name: 'Sophia Wilson', time: '06:35 am', lastMessage: 'Thanks for the update.', image: '../assets/person2.png' },
    { name: 'James Moore', time: '01:10 pm', lastMessage: 'Looking forward to it.', image: '../assets/person3.png' },
    { name: 'Olivia Taylor', time: '12:45 pm', lastMessage: 'Great, see you there!', image: '../assets/person4.png' },
    { name: 'Liam Anderson', time: '03:20 pm', lastMessage: 'Sounds good.', image: '../assets/person3.png' },
    { name: 'Ava Thomas', time: '05:05 pm', lastMessage: 'Will do.', image: '../assets/person2.png' },
    { name: 'Benjamin Jackson', time: '08:25 pm', lastMessage: 'Gotcha.', image: '../assets/person1.png' },
    { name: 'Mia Martinez', time: '10:10 pm', lastMessage: 'Catch up soon!', image: '../assets/person4.png' }
  ];

  selectedFriendIndex: number | null = null;

  selectFriend(index: number) {
    this.selectedFriendIndex = index;
  }
}
