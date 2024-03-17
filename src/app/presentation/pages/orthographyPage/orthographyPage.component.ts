import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {TextMessageBoxEvent, TextMessageBoxSelectComponent,ChatMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent} from '../../components/index'
import { Message } from '../../../interfaces/message.interface';
import { OpenAiService } from '../../services/openai.service';


@Component({
    selector: 'app-orthography-page',
    standalone: true,
    templateUrl: './orthographyPage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ChatMessageComponent,
        MyMessageComponent,
        TypingLoaderComponent,
        TextMessageBoxComponent,
        TextMessageBoxFileComponent,
        TextMessageBoxSelectComponent,
    ]
})
export default class OrthographyPageComponent {
    
    public messages = signal<Message[]>([{text:'Hola Mundo', isGpt:true}]);
    public isLoading = signal<boolean>(false);
    public openAiService = inject(OpenAiService); //This declaration is similiar to how it is ejcected in the constructor

    handleMessage(prompt: string){
        console.log({prompt});
    }
    
    
    handleMessageWithFile({prompt, file}: TextMessageEvent){
        console.log({prompt, file});
    }

    handleMessageWithSelect(event: TextMessageBoxEvent){    
        console.log({event});
    }

}
