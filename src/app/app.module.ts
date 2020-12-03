import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { PlansComponent } from './plans/plans.component';
import { NewsComponent } from './news/news.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ProductsComponent,
    PlansComponent,
    NewsComponent,
    AssistanceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
