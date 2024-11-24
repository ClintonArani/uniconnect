import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] // Correct plural 'styleUrls'
})
export class ChatComponent implements OnInit {
  messages: { text: string; isSender: boolean }[] = [];
  message: string = '';
  currentUser: string = 'Clinton'; // Replace with dynamically fetched username

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    // Listen for incoming messages
    this.socketService.onMessage('receiveMessage', (data: { message: string; sender: string }) => {
      const isSender = data.sender === this.currentUser;
      this.messages.push({ text: data.message, isSender });
    });
  }
  sendMessage(): void {
    if (this.message.trim()) {
      this.socketService.sendMessage('sendMessage', {
        message: this.message,
        sender: this.currentUser, // Send the sender's identity
      });
      this.message = ''; // Clear the input field
    }
  }
}