import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalysisServiceContracts } from 'core';
import { PoolAssistantClientService } from 'pool-assistant-client';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      { provide: AnalysisServiceContracts, useClass: PoolAssistantClientService }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
