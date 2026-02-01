import { Component, Input, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot/chatbot.service';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-msj-user',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './msj-user.component.html',
  styleUrl: './msj-user.component.css'
})
export class MsjUserComponent implements OnInit{

  @Input() mensaje:string;

  constructor(private msjUser:ChatbotService){}

  ngOnInit(): void {
    this.msjUser.setPregunta(this.mensaje);
  }
}
