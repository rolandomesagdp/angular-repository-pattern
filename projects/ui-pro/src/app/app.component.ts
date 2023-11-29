import { Component } from '@angular/core';
import { AnalysisServiceContracts } from 'core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'ui-pro';
   
   items: string[] = ["one", "two"];

   constructor(public analysisService: AnalysisServiceContracts) { }
}
