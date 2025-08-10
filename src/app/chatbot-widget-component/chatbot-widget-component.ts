import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot-widget-component',
  templateUrl: './chatbot-widget-component.html',
  styleUrl: './chatbot-widget-component.css',
  imports: [FormsModule, CommonModule]
})
export class ChatbotWidgetComponent {
  isOpen = false;
  messages: string[] = ['Hello! How can I help you?'];
  userInput = '';

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(this.userInput);
      this.userInput = '';
    }
  }
}