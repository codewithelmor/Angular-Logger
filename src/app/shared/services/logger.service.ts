import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message?: any, ...optionalParams: any[]): void {
    if (!environment.production) {
      if (message !== null || message !== undefined) {
        console.log(message);
      } else if (optionalParams !== null || optionalParams !== undefined) {
        console.log(optionalParams);
      }
    }
  }

}
