import { environment } from "../../../../environments/environment";
import { OrthographyResponse, apiURL } from "../../../interfaces";



export const orthographyUseCase = async ( prompt: string ) => {
      try {
            
            const resp = await fetch(`${environment.backendApi}${apiURL.ORTHOGRAPHY_CHECK}`,{
                  method: 'POST',
                  headers:{ 
                        'Content-Type': 'application/json' 
                  },
                  body: JSON.stringify({prompt})
            })

            if(!resp.ok) throw new Error('No se puede realizar la correción');

            const data = await resp.json() as OrthographyResponse;

            return {
                  ok: true,
                  ...data,
            }
            
      } catch (error) {
            console.log(error);
            return {
                  ok: false,
                  userScore: 0,
                  error: [],
                  message : 'No se puede realizar la correción'
            }
      }
}