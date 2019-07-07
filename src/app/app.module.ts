import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatService } from "../services/chat.service";
import { WebSocketService } from "../services/web-socket.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChatService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
