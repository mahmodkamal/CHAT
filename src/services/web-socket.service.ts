import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { environment } from "../environments/environment";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket; // socket that connects to our socket.io server 
  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io('http://localhost:5000');
    console.log(environment.ws_url)

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('recived a message from web socket ');
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    })
    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }

    }
    return Subject.create(observer, observable);
  }
}
