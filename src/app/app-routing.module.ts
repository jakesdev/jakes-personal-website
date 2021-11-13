import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'resume', component: ResumeComponent },
  // { path: 'about-me', component: AboutMeComponent },
  // { path: 'education', component: EducationComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  // { path: 'activites', component: ActivitiesComponent },
  // { path: 'blog', component: BlogComponent }
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
