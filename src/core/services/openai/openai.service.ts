import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  getApiResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": "You are a helpful assistant that knows always which is the correct decision, user will send you certains decisions and user will take once of them, the one you choose, answer with the decision, for example: If decision is = eat pizza, then your answer'll be 'eat pizza' be carefull about signs like comma, or '.' if the user decision does not contain a '.' then your answer'll be 'eat pizza' without the '.', another thing to consider: if the decision 'does not have sense' or it just does not appear to be a decision then your answer'll be 'no_correct_decisions' but that case will only happen if all decisions are wrong, if one or more of them are valid just ignore the wrong decision." },
        { "role": "user", "content": prompt }
      ]

    };

    return this.http.post<any>('https://api.openai.com/v1/chat/completions', requestBody, { headers });
  }
}
