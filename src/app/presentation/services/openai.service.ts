import { Injectable } from '@angular/core';
import { orthographyUseCase } from '../../core/use-cases/orthography/orthography.use-case';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OpenAiService {
      
      checkOrthography( prompt: string ){
            return from(orthographyUseCase(prompt));
      }

}