import { Component } from '@angular/core';
import { ChatService } from "../services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socket';
  constructor(private ChatService: ChatService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ChatService.message.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.ChatService.sendMesage("Test Message");
  }
}
