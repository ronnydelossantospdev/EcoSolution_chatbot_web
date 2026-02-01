import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  respuesta:string;

  constructor(private http:HttpClient) { }

  setPregunta(pregunta:string){
    this.setMensaje(pregunta).subscribe((respuesta)=>{
      this.respuesta = respuesta.mensaje;
    })
  }

  setMensaje(pregunta:string):Observable<any>{
    const body = {pregunta}
    return this.http.post<any>('http://127.0.0.1:5000/datos', body);
  }
}
