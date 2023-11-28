import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export abstract class AnalysisServiceContracts {
   
   abstract getAll(): Observable<string[]>
   
}
