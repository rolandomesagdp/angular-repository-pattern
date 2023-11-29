import { AnalysisServiceContracts } from "core";
import { Observable, Subject, concatMap, map, takeUntil, tap, timer } from "rxjs";

export class AnalysisResultListener {
   private stop$: Subject<void> = new Subject<void>();
   private maxNumber: number = 5;
   private timeTrack: number = 0;

   private timer$ = timer(0, 1000);

   analysisResult$: Observable<string[]> = this.timer$.pipe(
      tap(() => { this.timeTrack++}),
      concatMap(() => {
         if(this.timeTrack > this.maxNumber) {
            this.stop$.next();
         }
         return this.analysisService.getAll();
      }),
      map((analysis: string[]) => {
         return [...analysis, this.timeTrack.toString()]
      }),
      takeUntil(this.stop$)
   )

   constructor(private analysisService: AnalysisServiceContracts) { }
}