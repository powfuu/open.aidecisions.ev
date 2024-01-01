import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { from, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(public loadingController: LoadingController) { }

  startLoader(): Observable<void> {
    return from(this.loadingController.create({ mode: 'md', message: 'Fetching OpenAI API and generating your response...' })).pipe(
      mergeMap(response => from(response.present()))
    );
  }

  dismissLoader(): Observable<boolean> {
    return from(this.loadingController.dismiss());
  }
}
