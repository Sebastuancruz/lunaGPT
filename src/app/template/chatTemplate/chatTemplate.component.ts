import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Message } from '../../interfaces';
import { TextMessageEvent, TextMessageBoxEvent, ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TypingLoaderComponent } from '../../presentation/components';
import { OpenAiService } from '../../presentation/services/openai.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TypingLoaderComponent,
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent { 

    public messages = signal<Message[]>([]);
    public isLoading = signal<boolean>(false);
    public openAiService = inject(OpenAiService); //This declaration is similiar to how it is ejcected in the constructor

    handleMessage(prompt: string){
        console.log({prompt});
    }
    
    
    // handleMessageWithFile({prompt, file}: TextMessageEvent){
    //     console.log({prompt, file});
    // }

    // handleMessageWithSelect(event: TextMessageBoxEvent){    
    //     console.log({event});
    // }


  
}
