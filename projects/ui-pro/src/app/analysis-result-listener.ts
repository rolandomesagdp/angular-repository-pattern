import { AnalysisServiceContracts } from "core";
import { Observable, Subject, concatMap, map, takeUntil, tap, timer } from "rxjs";

export class AnalysisResultListener {
   private stop$: Subject<void> = new Subject<void>();
   private maxNumber: number = 5;
   timeTrack: number = 0;

   private timer$ = timer(0, 1000);

   analysisResult$: Observable<string[] | null> = this.timer$.pipe(
      tap(() => { this.timeTrack++}),
      concatMap(() => {
         if(this.timeTrack > this.maxNumber) {
            this.stop$.next();
         }
         return this.analysisService.getAll();
      }),
      map((analysis: string[]) => {
         return this.validateResult(analysis);
      }),
      takeUntil(this.stop$)
   )

   constructor(private analysisService: AnalysisServiceContracts) { }

   private validateResult(analysis: string[]): string[] | null {
      if(this.timeTrack < this.maxNumber) {
         return null;
      }
      else return analysis;
   }
}