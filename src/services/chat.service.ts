import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  message: Subject<any>

  constructor(private wsService: WebSocketService) {
    this.message = <Subject<any>>wsService
      .connect()
      .map((Response: any): any => {
        return Response;
      })
  }
  sendMesage(msg) {
    this.message.next(msg);
  }
}
