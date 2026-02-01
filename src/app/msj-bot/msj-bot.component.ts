import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot/chatbot.service';

@Component({
  selector: 'app-msj-bot',
  standalone: true,
  imports: [],
  templateUrl: './msj-bot.component.html',
  styleUrl: './msj-bot.component.css'
})
export class MsjBotComponent implements OnInit{
  
  msjResivido:string;
  constructor(private msjBot:ChatbotService){}

  ngOnInit(): void {
    this.msjResivido = this.msjBot.respuesta;
  }

}
