import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from "./pages/general/GeneralComponent";
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  // { path: '', redirectTo: 'en', pathMatch: 'full' },
  // { path: '**', redirectTo: 'en', pathMatch: 'full' },
  { path: ':lang', component: GeneralComponent,
    children:[
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: AboutComponent},
        { path: 'main', component: MainComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
