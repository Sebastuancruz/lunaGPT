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
    
    public messages = signal<Message[]>([]);
    public isLoading = signal(false);
    public openAiService = inject(OpenAiService); //This declaration is similiar to how it is ejcected in the constructor

    handleMessage(prompt: string){
        this.isLoading.set(true);

        this.messages.update( (prev) => [
            ...prev,
            {
                isGpt: false,
                text: prompt
            }
        ] );

        this.openAiService.checkOrthography(prompt).subscribe( resp => {
            this.isLoading.set(false);
            
            this.messages.update( prev => [
                ...prev,
                {
                    isGpt: true,
                    text: resp.message, 
                    info: resp,
                }
            ])
            
        });
    }
}
