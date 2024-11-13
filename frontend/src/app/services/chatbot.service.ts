import { Injectable } from '@angular/core';
import { ChatData } from '../interfaces/chat-data.interface';
import { ChatEntry } from '../interfaces/chat-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private chatData: ChatData[] = [
    { question: 'hello', answer: 'Hello to you how can I assist you today?'},
    { question: 'what is uniconnect', answer: 'Uniconnect is a global place which brings students from all universities together to discuss together, get connection to attachments, Internships, job placements etc'},
    { question: 'what is your name', answer: 'My name is Bill, can I also know your name'},
    { question: "What resources are available in the Computer Science department on UniConnect?", answer: "For the Computer Science department, UniConnect provides a curated digital library featuring e-books, journals, research papers, and lecture notes tailored to current industry trends and core computer science subjects like algorithms, data structures, machine learning, and software engineering." },
    { question: "Can I find past papers or study guides on UniConnect?", answer: "Yes, UniConnect’s digital library includes user-contributed content like study guides, lecture summaries, and past exam papers, accessible based on your department and course. You can also filter resources by topics or upload date for quick access." },
    { question: "How can I connect with other students in my department?", answer: "On UniConnect, you can join your department’s network to access dedicated discussion forums where students share ideas, projects, and academic advice. This feature enables you to connect with peers across universities who are also pursuing similar academic paths." },
    { question: "Are there options to collaborate on projects with students from other universities?", answer: "Yes! UniConnect provides project collaboration spaces that allow you to join or start a project with students from the same department in different universities. You can share files, use task tracking tools, and collaborate in real time using the built-in chat and video tools." },
    { question: "Can I chat with other students in real time?", answer: "Definitely! UniConnect supports real-time chat for instant messaging, group discussions, and even department-wide channels where you can join discussions on various academic topics, all in real-time." },
    { question: "Does UniConnect support video calls for group projects?", answer: "Yes, the chat feature includes video call functionality, enabling you to quickly set up video meetings for project discussions or study groups, directly from your chat interface." },
    { question: "Does UniConnect help with finding internships?", answer: "UniConnect’s career section is designed to support your job readiness, providing tailored listings for internships, job placements, and academic mentorship opportunities specific to your field of study." },
    { question: "How can I prepare for job interviews on UniConnect?", answer: "Our career support section offers mock interviews, workshops, and personalized interview preparation resources. You’ll also find articles on resume-building, sample interview questions, and even career webinars hosted by industry professionals." },
    { question: "Can I track my academic progress on UniConnect?", answer: "Yes! With UniConnect’s progress tracking dashboard, you can monitor your academic journey by recording completed projects, classes, certifications, and other accomplishments over time. This feature allows you to set and achieve academic and personal goals." },
    { question: "Are there any certifications provided for completing projects or courses?", answer: "UniConnect awards certifications for project completions, departmental workshop participation, and online courses hosted on the platform. These certificates can be downloaded from your profile and shared on other platforms, helping you build a verified academic portfolio." },
    { question: "I’m new to UniConnect. Can you guide me through?", answer: "Welcome to UniConnect! You can explore your department’s network, check out our digital library for resources, track your academic achievements, and get involved in project collaboration spaces. You’ll find it easy to navigate and connect with peers across universities." },
    { question: "How do I set up my profile on UniConnect?", answer: "To set up your profile, go to the ‘Profile’ tab, fill in your academic details like university, department, and course, and upload a profile picture if you’d like. Customize your privacy settings to control visibility, and you’re all set to start connecting!" },
    { question: "Is my personal data safe on UniConnect?", answer: "Yes, UniConnect prioritizes your data security by using advanced encryption and secure authentication measures. We follow GDPR standards and offer transparency on how your data is used, along with customizable privacy settings to control your profile visibility." },
    { question: "Who is the founder of UniConnect?", answer: "Clinton A. Omari is the founder of UniConnect." },
    { question: "Who is the CEO of UniConnect?", answer: "Mr. Clinton A. Omari is the CEO of UniConnect." },
    { question: "What is the brief history about the CEO?", answer: "Clinton Arani Omari is a young entrepreneur in Kenya. He is also a young educated PhD holder in Africa who has risen to power at superspeed and has become a member of an elite group earning over 100 billion dollars per month. Companies like Foster Corps and Sweet Families are looking to connect with his company that is Rosa Corps. Clinton started his Bachelor degree in Applied Computer Science in the year 2021 and now he is not only an elite member but also a rich man and a software engineer by profession." }
];

private chatHistory: ChatEntry[] = []; // Array to store chat history

  public getResponse(question: string): string {
    const data = this.chatData.find(item => item.question.toLowerCase() === question.toLowerCase());
    const answer = data ? data.answer : "Sorry, I didn't understand that. Can you rephrase?";
    this.chatHistory.push({ question, answer }); // Save question and answer to chat history
    return answer;
  }

  public getChatHistory(): ChatEntry[] {
    return this.chatHistory; // Retrieve the chat history
  }
}
