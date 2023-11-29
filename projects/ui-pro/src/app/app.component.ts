import { Component } from '@angular/core';
import { AnalysisServiceContracts } from 'core';
import { AnalysisResultListener } from './analysis-result-listener';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'ui-pro';
   
   items: string[] = ["one", "two"];

   analysisResultListener: AnalysisResultListener = new AnalysisResultListener(this.analysisService)

   constructor(public analysisService: AnalysisServiceContracts) { }
}
