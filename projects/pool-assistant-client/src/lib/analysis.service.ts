import { Injectable } from '@angular/core';
import { AnalysisServiceContracts } from 'core';
import { Observable, of } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class PoolAssistantClientService implements AnalysisServiceContracts {

   constructor() { }
   
   getAll(): Observable<string[]> {
      return of([ "hello", "world" ])
   }
}
