import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './modules/portfolio/component/portfolio-detail/portfolio-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
