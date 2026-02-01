import { Component, ComponentRef, OnInit, viewChild, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MsjUserComponent } from "../msj-user/msj-user.component";
import { MsjBotComponent } from "../msj-bot/msj-bot.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from "../bienvenida/bienvenida.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    BienvenidaComponent
],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent{

  @ViewChild("chat", {read: ViewContainerRef}) chat!:ViewContainerRef;

  chat_user:ComponentRef<MsjUserComponent>;
  chat_bot:ComponentRef<MsjBotComponent>;
  bienvenida:ComponentRef<BienvenidaComponent>;
  msj:string = '';
  disabled:boolean = false;
  btn_enviar_color:string = 'btn_enviar_disabled';

  ngAfterViewInit(): void {
    this.bienvenida = this.chat.createComponent(BienvenidaComponent);
  }

  color(){{
    if(this.msj.trim()){
      this.btn_enviar_color = 'btn_enviar';
    }else{
      this.btn_enviar_color = 'btn_enviar_disabled';
    }
  }}

  addMsjUser(){
       
    if(this.msj.trim()){

      this.bienvenida.destroy();

      this.chat_user = this.chat.createComponent(MsjUserComponent);
      this.chat_user.instance.mensaje = this.msj;
      this.msj = '';

      const cj_chat = document.getElementById('cj_chat');
      cj_chat.scrollTop = cj_chat.scrollHeight;
      
      setTimeout(()=>{
        this.chat_bot = this.chat.createComponent(MsjBotComponent);
        cj_chat.scrollTop = cj_chat.scrollHeight;
      }, 500)
    }
  }
}
