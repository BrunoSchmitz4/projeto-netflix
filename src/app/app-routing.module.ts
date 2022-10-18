import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { DevicesComponent } from "./components/devices/devices.component";
import { FreqQuesComponent } from "./components/freq-ques/freq-ques.component";
import { InfoCorpComponent } from "./components/info-corp/info-corp.component";
import { InvestorsComponent } from "./components/investors/investors.component";
import { JobsComponent } from "./components/jobs/jobs.component";

import { LoginComponent } from "./components/login/login.component";
import { OriginalComponent } from "./components/original/original.component";
import { UseTermsComponent } from "./components/use-terms/use-terms.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'pag-filme', component: CatalogoComponent},
    {path: 'freq-ques', component: FreqQuesComponent},
    {path: 'investors', component: InvestorsComponent},
    {path: 'devices', component: DevicesComponent},
    {path: 'info-corp', component: InfoCorpComponent},
    {path: 'original', component: OriginalComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'terms', component: UseTermsComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}