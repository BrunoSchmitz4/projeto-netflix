import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//Importação do exportador routing.module

import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginComponent } from './components/login/login.component';
import { FreqQuesComponent } from './components/freq-ques/freq-ques.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { DevicesComponent } from './components/devices/devices.component';
import { InfoCorpComponent } from './components/info-corp/info-corp.component';
import { OriginalComponent } from './components/original/original.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { UseTermsComponent } from './components/use-terms/use-terms.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    LoginComponent,
    FreqQuesComponent,
    InvestorsComponent,
    DevicesComponent,
    InfoCorpComponent,
    OriginalComponent,
    JobsComponent,
    UseTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importa arquivs importados
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
